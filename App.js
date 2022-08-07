import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Practice from './components/Practice';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [todos, setTodos] = useState([]);
  const asyncStorageKey = '@todos'; // storage key name variable

  // get data each time app is loaded
  useEffect(() => {
    fetchData();
  }, []);

  // updates whenever todos are updated
  useEffect(() => {
    storeInAsync(todos);
  }, [todos]);

  // async storage
  const storeInAsync = async (todos) => {
    try {
      const stringifiedTodos = JSON.stringify(todos);
      // stringify todos object
      AsyncStorage.setItem(asyncStorageKey, stringifiedTodos);
      // add it to storage .setItem(key, name)
    } catch (e) {
      console.log('problem storing todos');
    }
  };

  // fetch data from async storage
  const fetchData = async () => {
    try {
      const todos = await AsyncStorage.getItem(asyncStorageKey);
      // get data by key name
      if (todos) {
        setTodos(JSON.parse(todos));
        // if it exists, parse the data back to an object
      }
    } catch (e) {
      alert('failed to fetch data');
    }
  };

  // clear all todos
  const clearStorage = () => {
    Alert.alert('Confirm', 'Clear all todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      { text: 'No' },
    ]);
  };

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
          <AddTodo
            setTodos={setTodos}
            todos={todos}
            asyncStorageKey={asyncStorageKey}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} todos={todos} setTodos={setTodos} />
              )}
            />
          </View>
          <Button title='Clear all' onPress={clearStorage} />
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
