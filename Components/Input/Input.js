import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Input = ({ placeholder, onChangeText, style }) => {
  return (
    <View style={[styles.outline, style]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    flex: 1,
  },
  input: {
    backgroundColor: "#d9d9d9",
    marginHorizontal: 10,
    padding: 6,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});

export default Input;
