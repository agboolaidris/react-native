import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

function TodoItems({ item, handleDelete }) {
  return (
    <View style={styles.todoCard}>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.todoCardText}>{item.content}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoCard: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  todoCardText: {
    fontWeight: "bold",
    padding: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "gray",
    borderRadius: 20,
  },
});

export default TodoItems;
