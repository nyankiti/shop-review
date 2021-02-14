import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
/* screens */
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
import { CreateReviewScreen } from "../screens/CreateReviewScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#000",
      }}
    >
      {/* HomeScreenでお店の一覧を表示 */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ headerShown: false }}
      />
      {/* ShopScreenでその店の詳細とレビューを表示 */}
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
);
