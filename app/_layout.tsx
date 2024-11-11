import {AuthProvider} from "@/providers/AuthProvider";
import { Stack } from 'expo-router';
import {ReactNode} from "react";

export default function RootLayout(): ReactNode {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
