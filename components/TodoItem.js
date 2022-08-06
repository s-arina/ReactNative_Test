import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, setTodos }) {
  const [taskComplete, setTaskComplete] = useState(false);

  const pressHandler = (id) => {
    // deleting a todo
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TouchableOpacity
      style={styles.items}
      onPress={() => {
        setTaskComplete(!taskComplete);
      }}
    >
      <Text style={taskComplete ? styles.itemComplete : styles.item}>
        {item.text}
      </Text>
      <MaterialIcons
        name='delete'
        size={18}
        color='#333'
        margin={15}
        onPress={() => pressHandler(item.id)}
      ></MaterialIcons>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    textDecorationLine: 'none',
    maxWidth: '90%',
  },
  itemComplete: {
    textDecorationLine: 'line-through',
    maxWidth: '90%',
  },
});
