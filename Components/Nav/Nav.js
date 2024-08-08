import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Nav = ({ icon, title, iconTwo, style, onPress, onPressTwo }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onPress}
      >
        <Text>{icon}</Text>
      </TouchableOpacity>
      <Text style={[styles.navText, style]}>{title}</Text>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPressTwo}
        >
          <Text>{iconTwo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "#242424",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#1d1d1d",
    fontWeight: "500",
  },
});

export default Nav;
