import {ReactNode} from "react";
import {View, Text} from "react-native";

export default function Settings(): ReactNode {
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
      <Text>Settings</Text>
    </View>
  );
}
