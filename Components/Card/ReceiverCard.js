import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReceiverCard = ({ text, time }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  text: {
    color: "#1d1d1d",
    fontWeight: "500",
  },
});

export default ReceiverCard;
