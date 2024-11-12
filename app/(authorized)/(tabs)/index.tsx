import {AuthContext} from "@/providers/AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useContext} from "react";
import {View, Text, Button} from "react-native";

export default function Index() {
  console.log('HOME render');
  const {setUserLoggedIn} = useContext(AuthContext);
  const logout = () => {
    Promise.all([
      AsyncStorage.setItem('@user', '-1'),
      AsyncStorage.setItem('@token', '')
    ])
      .then(() => {
        setUserLoggedIn(false);
      });
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}
    >
      <Text>Home</Text>
      <Button title={"Logout"} onPress={logout}/>
    </View>
  );
}
