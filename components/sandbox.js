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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default Sandbox;
