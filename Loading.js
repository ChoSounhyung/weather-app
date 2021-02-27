import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting today's weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#014512",
    fontSize: 30,
    fontWeight: "bold",
  },
});
