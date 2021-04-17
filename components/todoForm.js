import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Alert } from "react-native";

function TodoForm({ AddTodo }) {
  const [state, setstate] = useState("");

  const handleChange = (val) => {
    setstate(val);
  };

  const handleSubmit = () => {
    if (state.length > 3) {
      AddTodo(state);
      setstate("");
    } else {
      Alert.alert("OOPS!", "Todo must be greater than 3 characters");
      [{ text: "Understood", onPress: () => console.log("understood") }];
    }
  };
  return (
    <View style={styles.formWrapper}>
      <TextInput
        placeholder="add todo..."
        onChangeText={handleChange}
        style={styles.input}
      />
      <Button title="Add Todo" color="coral" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    margin: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
});

export default TodoForm;
