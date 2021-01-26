import React from 'react';
import {Button, StyleSheet, TextInput, View, Image, Text, TouchableOpacity} from 'react-native';
/* types */
import { User } from "../types/user";


// export function ChatUser(props){
//   return (
//     <TouchableOpacity style={styles.container} onPress={props.onPress}>
//       <Image style={styles.avatar} source={{uri: props.item.avatar}} />
//       <Text>{props.item.name} </Text>
//     </TouchableOpacity>
//   )
// }

type Props = {
  user: User;
  onPress: () => void;
};

export const ChatUser: React.FC<Props> = ( { user, onPress }: Props ) => {
  const { id, name, avatar, updatedAt, createdAt } = user;
  return (  
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text>{name} </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  row: {
    flexDirection:'row',
    padding: 10,
    alignItems:'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },


})