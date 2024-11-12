import {useAuthSession} from "@/providers/AuthProvider";
import {Redirect, Stack} from 'expo-router';
import {Text} from 'react-native';
import {ReactNode} from "react";

export default function RootLayout(): ReactNode {
  console.log('authorized root render');
  const {token} = useAuthSession()

  if (token === null || token.current === null) {
    console.log('isLoading');
    return <Text>Loading...</Text>;
  }

  if (token.current === '') {
    console.log('userLoggedIn is false because token is ', token);
    return <Redirect href="/login" />;
  }
  console.log('all good');
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
