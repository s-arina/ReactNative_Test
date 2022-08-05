import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title='Add todo'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
