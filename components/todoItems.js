import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

function TodoItems({ item, DeleteTodo }) {
  return (
    <View style={styles.todoCard}>
      <TouchableOpacity onPress={() => DeleteTodo(item.id)}>
        <MaterialIcons name="delete" size={18} color="coral" />
      </TouchableOpacity>
      <Text style={styles.todoCardText}>{item.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoCard: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
  },
  todoCardText: {
    fontWeight: "bold",
    marginLeft: 19,
  },
});

export default TodoItems;
