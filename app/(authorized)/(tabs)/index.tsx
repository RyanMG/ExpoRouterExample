import {useAuthSession} from "@/providers/AuthProvider";
import {View, Text, Button} from "react-native";

export default function Index() {
  console.log('HOME render');
  const {signOut} = useAuthSession()
  const logout = () => {
     signOut();
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
