import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import TodoItems from "./components/todoItems";
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
  const handleDelete = (id) => {
    settodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItems item={item} handleDelete={handleDelete} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    //justifyContent: "center",
  },
});
