import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from "expo-router";
import {createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction} from 'react';

interface IAuthProvider {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
  userLoggedIn: boolean;
  setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = ({children}:{children: ReactNode}): ReactNode => {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<number>(-1);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    (() => async ():Promise<void> => {
      const userIdPromise = AsyncStorage.getItem('@user');
      const tokenPromise = AsyncStorage.getItem('@token');
      const [
        userId,
        token
      ] = await Promise.all([userIdPromise, tokenPromise]);

      setUserId(Number(userId) || -1);
      setToken(token || '');

      if (userId && token) {
        setUserLoggedIn(true);
      }
    })()
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        userLoggedIn,
        setUserLoggedIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
