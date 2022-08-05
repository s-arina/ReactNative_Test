import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'boo', id: 0 },
    { name: 'yoshi', id: 1 },
    { name: 'mario', id: 2 },
    { name: 'luigi', id: 3 },
    { name: 'peach', id: 4 },
    { name: 'bowser', id: 5 },
  ]);

  const pressHandler = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    console.log(id);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <FlatList // lazy loads data, only shows what's on screen, better than map if a lot of data
        numColumns={2} // split into columns
        keyExtractor={(item) => item.id} // gets the id prop from the data
        data={people} // data from state
        renderItem={(
          { item } // render text out
        ) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
