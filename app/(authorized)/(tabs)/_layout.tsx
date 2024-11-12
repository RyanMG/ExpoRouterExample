
import {Tabs} from 'expo-router';
import {ReactNode} from "react";

export default function TabLayout(): ReactNode {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          margin: 0,
          fontSize: 15
        },
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: '#DDDDDD',
        },
        tabBarActiveBackgroundColor: '#CCCCCC',
        tabBarIconStyle: { display: "none" }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
      <Tabs.Screen
        name="Users"
        options={{
          tabBarLabel: "Users",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
    </Tabs>
  );
}
