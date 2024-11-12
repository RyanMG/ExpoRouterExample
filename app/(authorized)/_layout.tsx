import {AuthContext} from "@/providers/AuthProvider";
import {Redirect, Stack} from 'expo-router';
import {ReactNode, useContext} from "react";

export default function RootLayout(): ReactNode {
  console.log('authorized root render');
  const {userLoggedIn} = useContext(AuthContext);
  if (!userLoggedIn) {
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
