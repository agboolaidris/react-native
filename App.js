import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/header";
import TodoItems from "./components/todoItems";
import TodoForm from "./components/todoForm";
import SandBox from "./components/sandbox";

export default function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      content: "I wanna buy coffe",
    },
    {
      id: 2,
      content: "I wanna to learn react-native",
    },
    {
      id: 3,
      content: "I wanna buy observe solat",
    },
    {
      id: 4,
      content: "I wanna rest",
    },
  ]);
  const DeleteTodo = (id) => {
    settodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const AddTodo = (content) => {
    settodos((prevTodos) => {
      return [...prevTodos, { content, id: Math.random().toString() }];
    });
  };
  return (
    // <View></View>

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <TodoForm AddTodo={AddTodo} />
        <View style={styles.todoListWrapper}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TodoItems item={item} DeleteTodo={DeleteTodo} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    // alignItems: "center",
    //justifyContent: "center",
  },
  todoListWrapper: {
    flex: 1,
  },
});
