import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTodo(index)}>
              <Text style={styles.removeBtn}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#fefefe',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  todoText: {
    fontSize: 16,
  },
  removeBtn: {
    color: '#ff4444',
    fontWeight: 'bold',
  },
});
