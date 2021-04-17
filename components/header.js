import React from "react";
import { Text, View, StyleSheet } from "react-native";
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    paddingTop: 30,
    height: 80,
  },
  logo: {
    textAlign: "center",
    color: "#f7f7f7",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});

export default Header;
