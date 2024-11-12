import {useAuthSession} from "@/providers/AuthProvider";
import {useState} from "react";
import {View, Text, Button} from "react-native";

export default function Index() {
  console.log('HOME render');
  const {signOut, token} = useAuthSession()
  const [tokenInUi, setTokenInUi] = useState<null|string|undefined>(null)

  const logout = () => {
     signOut();
  }

  const callApi = () => {
    setTokenInUi(token?.current);
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
      <View style={{
        paddingTop: 20
      }} />
      <Text>Make an API call with the stored AUTH token</Text>
      <Button title={"Call API"} onPress={callApi} />
      {tokenInUi &&
        <Text>{`Your API access token is ${tokenInUi}`}</Text>
      }
    </View>
  );
}
