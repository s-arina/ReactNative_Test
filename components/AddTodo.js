import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';

export default function AddTodo({ setTodos }) {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e);
  };

  const submitHandler = (text) => {
    if (text) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, id: uuid() }];
      });
    } else {
      Alert.alert('Oops!', 'Task cannot be empty.', [{ text: 'OK' }]);
    }
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Pressable onPress={() => submitHandler(text)}>
        <Text style={styles.button}>ADD TODO</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'coral',
    textAlign: 'center',
    width: 100,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
