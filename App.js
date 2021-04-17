import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [person, setperson] = useState([
    {
      name: "Idris",
    },
    {
      name: "Ishola",
    },
    {
      name: "Agboola",
    },
    {
      name: "Hammed",
    },
    {
      name: "Bashiru",
    },
    {
      name: "Basit",
    },
    {
      name: "Afeez",
    },
    {
      name: "Asabi",
    },
    {
      name: "Asabi",
    },
    {
      name: "Asabi",
    },
    {
      name: "Asabi",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {person.map((name, index) => (
          <View key={index}>
            <Text style={styles.name}>{name.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
  },
  name: {
    backgroundColor: "pink",
    padding: 30,
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
