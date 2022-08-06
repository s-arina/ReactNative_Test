import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
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
          <AddTodo setTodos={setTodos} />
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
    flex: 1,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});
