import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SenderCard = ({ text, time, status }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.grid}>
        <Text style={styles.time}>{time}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    backgroundColor: "#38bcc7",
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    maxWidth: "70%",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  text: {
    color: "#1d1d1d",
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});

export default SenderCard;
