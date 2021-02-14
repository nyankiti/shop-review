import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, FlatList, View, TextInput, Button  } from "react-native";

import * as firebase from "firebase";
/* lib */
import { getUsers } from "../lib/firebase";
/* components */
import { Form } from "../components/Form";
import { Loading } from "../components/Loading";
import { ChatUser } from '../components/ChatUser';
/* contexts */
import { UserContext } from "../contexts/userContext";
/* types */
import { User } from "../types/user";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";



type Props = {
  navigation: StackNavigationProp<RootStackParamList, "ChatUsers">;
  route: RouteProp<RootStackParamList, "User">;
};

// React.FC (React.FunctionComponent のショートハンド) 
export const ChatUsersScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [users, setUsers] = useState<User[]>();
  const [userToAdd, setUserToAdd] = useState();

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const users = await getUsers();
    setUsers(users);
    console.log(users);
  };

  const onPressUser = (user: User) => {
    // ここのnavigateで指定した型のものがroute.paramsから取得できる
    // 画面遷移の処理はここではなく、ChatStackNavigatorで実装されている
    navigation.navigate("Chat", { user });
  };

  const onAddUser = () => {

  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.addUser} >
        <TextInput  style={styles.input} onChangeText={ () => setUserToAdd } value  ={ userToAdd } />
        <Button title={'Add User'} onPress={onAddUser} />
      </View>

      <FlatList
        data={users}
        renderItem={({ item }: { item: User }) => (
          <ChatUser user={item} onPress={() => onPressUser(item)} />
        )}
        // keyExtractorで番号を指定することでデータのidなどに沿ってitemを並び替えられる。 データがidなどのindexを持つときは、map関数のように第２引数にindexを取ることで自動でカウントしてくれる stringで指定する必要があるので注意
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
      /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    backgroundColor: '#cacaca',
    flex: 1,
    marginRight: 10,
    padding: 10
  }
});
