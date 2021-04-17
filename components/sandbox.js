import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>Item One</Text>
      <Text style={styles.two}>Item Two</Text>
      <Text style={styles.three}>Item Three</Text>
      <Text style={styles.four}>Item Four</Text>
      <Text style={styles.five}>Item Five</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
  },

  one: {
    backgroundColor: "pink",
    padding: 10,
    marginTop: 10,
  },
  two: {
    backgroundColor: "coral",
    padding: 10,
    marginTop: 10,
  },
  three: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 10,
  },
  four: {
    backgroundColor: "gray",
    padding: 10,
    marginTop: 10,
  },
  five: {
    backgroundColor: "yellow",
    padding: 10,
    marginTop: 10,
  },
});

export default Sandbox;
