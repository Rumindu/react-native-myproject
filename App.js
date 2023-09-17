import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

  //external function
  const typing = (value) => {
    setName(value);
  }

  return (
    <View style={styles.container}>

      <Text>Enter name:</Text>
      <TextInput
        multiline
        placeholder='e.g. John Doe' 
        style={styles.input}
        //Adding Event Listner with external function
        onChangeText={typing} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='e.g. 99' 
        keyboardType='numeric'
        style={styles.input}
        //Adding Event Listner with anonymous function
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.result}>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
