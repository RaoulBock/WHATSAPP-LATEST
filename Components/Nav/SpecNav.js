import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";
import Model from "../Model/Model";
import UserDetails from "../Screen/UserDetails";

const SpecNav = ({ icon, title, iconTwo, style, onPress, onPressTwo, uri }) => {
  const { userDetailVisable, setUserDetailVisable } =
    React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      {userDetailVisable === true && (
        <Model
          visible={userDetailVisable}
          onRequestClose={setUserDetailVisable}
          children={<UserDetails />}
        />
      )}
      <View style={styles.grid}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onPress}
        >
          <Text>{icon}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userInfo}
          activeOpacity={0.8}
          onPress={() => setUserDetailVisable(true)}
        >
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
    width: 50,
    height: 50,
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
