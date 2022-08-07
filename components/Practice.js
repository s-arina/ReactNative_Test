import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function Practice() {
  const [people, setPeople] = useState([
    { name: 'boo', id: 0 },
    { name: 'yoshi', id: 1 },
    { name: 'mario', id: 2 },
    { name: 'luigi', id: 3 },
    { name: 'peach', id: 4 },
    { name: 'bowser', id: 5 },
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  console.log(people);

  return (
    <View style={styles.containerPractice}>
      <FlatList // lazy loads data, only shows what's on screen, better than map if a lot of data
        numColumns={2} // split into columns
        keyExtractor={(item) => item.id} // gets the id prop from the data
        data={people} // data from state
        renderItem={(
          { item } // render text out
        ) => (
          <TouchableOpacity // imitates a touch action, can pass a function into it
            onPress={() => pressHandler(item.id)}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // native doesn't use CSS, stylesheet.create imitates it
  containerPractice: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
