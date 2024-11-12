import {useAuthSession} from "@/providers/AuthProvider";
import {ReactNode} from "react";
import {Button, Text, View} from "react-native";

export default function Login(): ReactNode {
  console.log('login render');
  const {signIn} = useAuthSession();
  const login = ():void => {
    signIn("1234.abcd");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login screen</Text>
      <Button title={"Login"} onPress={login} />
    </View>
  );
}
