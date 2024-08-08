import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ChatList = ({ uri, name, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.outline}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.grid}>
        <Image
          source={{
            uri: uri,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>Hello, how are you?</Text>
        </View>
      </View>
      <View>
        <Text>12:00</Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "500",
    color: "#1d1d1d",
  },
  lastMessage: {
    color: "gray",
  },
});

export default ChatList;
