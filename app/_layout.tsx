import {AuthProvider} from "@/providers/AuthProvider";
import { Stack } from 'expo-router';

export default function RootLayout() {
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
