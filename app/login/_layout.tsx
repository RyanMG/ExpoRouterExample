import {AuthContext} from "@/providers/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {useContext, useEffect} from "react";
import {Button, Text, View} from "react-native";

export default function Login() {
  const {setUserLoggedIn} = useContext(AuthContext);
  const login = () => {
    Promise.all([
      AsyncStorage.setItem('@user', '1'),
      AsyncStorage.setItem('@token', 'abc')
    ])
      .then(() => {
        setUserLoggedIn(true);
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
