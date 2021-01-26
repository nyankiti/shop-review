import React, {useState, useCallback, useEffect} from 'react';
import { Pressable, StyleSheet, Image, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export function Chat({onBack,selectedUser}){
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <>
    <Pressable onPress={onBack} style={styles.actionBar}>
      <Image source={require('../../assets/icon.png')} />
      <Text>{selectedUser?.name}</Text>
    </Pressable>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </>
  )
}


const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: '#cacaca',
    height: 41,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

})

