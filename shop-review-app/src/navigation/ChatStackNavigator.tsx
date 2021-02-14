import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screens */
import { ChatScreen } from "../screens/ChatScreen";
import { ChatUsersScreen } from "../screens/ChatUsersScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export const ChatStackNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#000",
        }}
      >
        <Stack.Screen
          name="ChatUsers"
          component={ChatUsersScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>

  );
};