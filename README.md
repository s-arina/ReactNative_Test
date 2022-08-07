## React Native Todo App

A simple todo app as a first attempt at learning React Native.

### Functionality

- Add a todo
- Delete a todo
- Mark a todo as complete/incomplete
- Clear all todos
- Todos saved in async storage

### Notes

- View, Text, StyleSheet
- StyleSheet.create({}), style={styles.name} for "css" styling
- TextInput for input fields
- Pressable for clickable elements (not the same as Button)
- TouchableOpacity for click animation
- Alert for popups/confirmations

- FlatList > .map for larger data (lazy loads)
- keyExtractor looks for id in data
- data={data}, pass state in
- renderItem, render element out like mapping text

- expo start, open on xcode simulator

### Extras

- v4 as uuid for unique key generating
- pair uui with react-native-get-random-values
- https://icons.expo.fyi/ for icons
