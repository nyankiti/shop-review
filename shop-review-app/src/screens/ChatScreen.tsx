import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';
import * as firebase from "firebase";

/* lib */
import { getUsers } from "../lib/firebase";
/* components */
import { Login } from "../components/Login";
// import { ChatUser } from "../components/ChatUser";
import { Chat } from "../components/Chat";
import { ChatUser } from '../components/ChatUser';
/* types */
import { User } from "../types/user";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "ChatUsers">;
  route: RouteProp<RootStackParamList, "Chat">;
};

// Navigation中のScreenコンポーネントは自動的にrouteというpropsが割り当てられており、
// routeは、自動的に割り当てられるkey, MainTabNavigatorのところで指定するnameと、任意で自分で渡したいものを格納するためのparamasを持っている
// このプロジェクトではroute.paramsを用いてChatUsersの情報を画面遷移時に受け渡している



export const ChatScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  // ChatUsersScreenからのパラメーターに格納された選択中のユーザー情報を受け取る
  const { user } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: user.name });

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: user.name ,
          avatar: user.avatar,
        },
      },
    ])

  }, []);


  // ----------------------------------------------

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
  // ------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <Text>{ user.name }</Text>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});