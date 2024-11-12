import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from "expo-router";
import {createContext, MutableRefObject, ReactNode, useCallback, useContext, useEffect, useRef, useState} from 'react';

const AuthContext = createContext<{
  signIn: (arg0: string) => void;
  signOut: () => void
  token: MutableRefObject<string | null> | null;
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  token: null,
  isLoading: true
});

// This hook can be used to access the user info.
export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider  ({children}:{children: ReactNode}): ReactNode {
  const tokenRef = useRef<string|null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async ():Promise<void> => {
      const token = await AsyncStorage.getItem('@token');
      console.log('setting token');
      tokenRef.current = token || '';
      setIsLoading(false);
    })()
  }, []);

  const signIn = useCallback(async (token: string) => {
    console.log('setting token in local storage', token);
    await AsyncStorage.setItem('@token', token);
    console.log('setting token ref with', token);
    tokenRef.current = token;
    router.replace('/')
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.setItem('@token', '');
    tokenRef.current = null;
    router.replace('/login');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: tokenRef,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
