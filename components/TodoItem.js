import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
      <MaterialIcons
        name='delete'
        size={18}
        color='#333'
        onPress={() => pressHandler(item.id)}
      ></MaterialIcons>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
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
  close: {
    color: 'grey',
  },
});
