import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction} from 'react';

interface IAuthProvider {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
  userLoggedIn: boolean;
  setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = ({children}:{children: ReactNode}): ReactNode => {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<number>(-1);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('1');
    (async ():Promise<void> => {
      console.log('2');
      const userIdPromise = AsyncStorage.getItem('@user');
      const tokenPromise = AsyncStorage.getItem('@token');
      const [
        userId,
        token
      ] = await Promise.all([userIdPromise, tokenPromise]);

      setUserId(Number(userId) || -1);
      setToken(token || '');
      console.log('userId', userId);
      console.log('token', token);
      if (userId && token) {
        console.log('setting user logged in from auth provider startup');
        setUserLoggedIn(true);
      }
      setIsLoading(false);
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
        setUserLoggedIn,
        isLoading
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
