import {AuthContext} from "@/providers/AuthProvider";
import {Redirect, Stack} from 'expo-router';
import {Text} from 'react-native';
import {ReactNode, useContext} from "react";

export default function RootLayout(): ReactNode {
  console.log('authorized root render');
  const {userLoggedIn, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!userLoggedIn) {
    console.log('userLoggedIn is', userLoggedIn);
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
