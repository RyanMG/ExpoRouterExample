import {AuthProvider} from "@/providers/AuthProvider";
import {Slot} from "expo-router";
import {ReactNode} from "react";

export default function RootLayout(): ReactNode {
  console.log('root render');
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
