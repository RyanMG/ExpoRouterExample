import {useAuthSession} from "@/providers/AuthProvider";
import {Redirect, Stack} from 'expo-router';
import {Text} from 'react-native';
import {ReactNode} from "react";

export default function RootLayout(): ReactNode {
  const {token, isLoading} = useAuthSession()

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (token?.current === '') {
    return <Redirect href="/login" />;
  }

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
