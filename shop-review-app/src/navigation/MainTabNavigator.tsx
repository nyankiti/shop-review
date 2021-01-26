import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
/* screens */
import { HomeStackNavigator } from "./HomeStackNavigator";
import { ChatStackNavigator } from "./ChatStackNavigator";
import { SearchScreen } from "../screens/SearchScreen";
import { UserScreen } from "../screens/UserScreen";


const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#900",
        inactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            // https://github.com/expo/vector-icons/blob/master/build/Feather.d.tsに載ってるアイコンしか使えない
            <Feather name="users" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
