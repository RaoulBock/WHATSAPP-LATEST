import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { APP_ICONS } from "../../context/settings";

const SpecNav = ({ icon, title, iconTwo, style, onPress, onPressTwo, uri }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPress}
        >
          <Text>{icon}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfo} activeOpacity={0.8}>
          <Image
            source={{
              uri: uri,
            }}
            style={styles.image}
          />
          <View>
            <Text style={[styles.navText, style]}>{title}</Text>
            <Text style={[styles.statusActive, style]}>{"Online"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPressTwo}
        >
          <Text>{APP_ICONS.VIDEO}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPressTwo}
        >
          <Text>{APP_ICONS.PHONE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPressTwo}
        >
          <Text>{APP_ICONS.DOTS}</Text>
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
    paddingHorizontal: 6,
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
  grid: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusActive: {
    fontSize: 12,
  },
});

export default SpecNav;
