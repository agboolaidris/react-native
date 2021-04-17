import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>HELLO REACT-NATIVE</Text>
      </View>
      <View style={styles.body}>
        <Text>
          <Text>lorem palem anti popo adsf.</Text>
          <Text>lorem palem anti popo adsf.</Text>
          <Text>lorem palem anti popo adsf.</Text>
        </Text>
        <Text>lorem palem anti popo adsf.</Text>
        <Text>lorem palem anti popo adsf.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  text: {
    color: "yellow",
  },
});
