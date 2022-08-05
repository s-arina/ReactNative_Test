import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Practice from './components/Practice';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', id: 0 },
    { text: 'create an app', id: 1 },
    { text: 'play on the switch', id: 2 },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const submitHandler = (text) => {
    if (text) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, id: Math.random().toString() }];
        // try uuid for key generating
      });
    } else {
      Alert.alert('Oops!', 'Task cannot be empty.', [
        { text: 'OK', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  console.log(todos);
  return (
    <TouchableWithoutFeedback // wrap code in this
      onPress={() => {
        Keyboard.dismiss(); // dismiss the keyboard when clicked elsewhere
      }}
    >
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});
