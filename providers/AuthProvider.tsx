import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from "expo-router";
import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';

const AuthContext = createContext<{
  signIn: (arg0: string) => void;
  signOut: () => void
  token: string | null;
}>({
  signIn: () => null,
  signOut: () => null,
  token: null
});

// This hook can be used to access the user info.
export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider  ({children}:{children: ReactNode}): ReactNode {
  const [token, setToken] = useState<string|null>(null);

  useEffect(() => {
    (async ():Promise<void> => {
      const token = await AsyncStorage.getItem('@token');
      console.log('setting token');
      setToken(token || '');
    })()
  }, []);

  const signIn = useCallback(async (token: string) => {
    console.log('setting token in local storage', token);
    await AsyncStorage.setItem('@token', token);
    console.log('setting token state with', token);
    setToken(token);
    router.replace('/')
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.setItem('@token', '');
    setToken('');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
