import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, setTodos, todos }) {
  const [taskComplete, setTaskComplete] = useState(false);

  // delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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
        onPress={() => deleteTodo(item.id)}
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
