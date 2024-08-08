import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../Button/Button";

const ChatLockView = () => {
  return (
    <View style={styles.outline}>
      <Image source={require("../Images/chatLock.png")} style={styles.image} />
      <Text style={styles.title}>Keep this chat locked and hidden.</Text>
      <Text style={styles.description}>
        Use your dace or fingerprint to open this chat and read notifications on
        this device. For even more privacy, locked chats will be kept separate
        from other chats.
      </Text>

      <View style={{ flex: 1 }}></View>
      <View>
        <Button title={"Continue"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    color: "#1d1d1d",
    fontWeight: "600",
    fontSize: 26,
    textAlign: "center",
  },
  description: {
    marginTop: 6,
    color: "gray",
    fontWeight: "300",
    paddingHorizontal: 16,
  },
});

export default ChatLockView;
