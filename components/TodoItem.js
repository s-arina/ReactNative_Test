import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, setTodos, todos }) {
  // delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // mark as complete/incomplete
  const markTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // if the todo.id matches the id passed in
        return { ...todo, completed: !todo.completed };
        // return the todo with it's completed status inverted
      }
      return todo;
      // return
    });
    setTodos(newTodos);
  };

  return (
    <TouchableOpacity // touchable opacity gives an animation when element is pressed
      style={styles.items}
      onPress={() => {
        markTodo(item.id);
      }}
    >
      <Entypo
        name={item.completed ? 'check' : 'circle'} // icon change depending on completed status
        size={18}
        color='#333'
      />
      <Text style={item.completed ? styles.itemComplete : styles.item}>
        {/* strike through styling on completed items */}
        {item.text}
      </Text>
      <MaterialIcons
        name='delete'
        size={18}
        color='#333'
        onPress={() => deleteTodo(item.id)}
      />
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
