import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export function Login( props ){
  return( 
    <View style={styles.container} >
      <TextInput style={styles.input} onChangeText={props.setUsername} value={props.username} />
      <Button title={'Login'} onPress={props.onLogin} />
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  }

})