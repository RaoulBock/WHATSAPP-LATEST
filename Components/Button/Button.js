import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#242424",
    paddingVertical: 16,
    borderRadius: 50,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Button;
