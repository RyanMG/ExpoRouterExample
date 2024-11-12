import {AuthContext} from "@/providers/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {ReactNode, useContext} from "react";
import {Button, Text, View} from "react-native";

export default function Login(): ReactNode {
  console.log('login render');
  const {setUserLoggedIn} = useContext(AuthContext);
  const login = ():void => {
    Promise.all([
      AsyncStorage.setItem('@user', '1'),
      AsyncStorage.setItem('@token', 'abc')
    ])
      .then(() => {
        setUserLoggedIn(true);
        router.replace("/");
      });
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
