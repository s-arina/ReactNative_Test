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

export default function AddTodo({ setTodos, todos }) {
  const [text, setText] = useState('');

  // input control
  const changeHandler = (e) => {
    setText(e);
  };

  // add todo, sends info to App.js
  const submitHandler = (text) => {
    if (text) {
      try {
        // adds new todo to list without overwriting and generate a unique id
        setTodos([...todos, { id: uuid(), text, completed: false }]);
      } catch (e) {
        alert('failed to save data');
      }
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
      <Pressable onPress={() => submitHandler(text)} style={styles.button}>
        <Text style={styles.add}>ADD TODO</Text>
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
    borderRadius: 10,
    width: 100,
    padding: 10,
  },
  add: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
