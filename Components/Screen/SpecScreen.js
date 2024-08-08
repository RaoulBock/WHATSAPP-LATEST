import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Nav from "../Nav/Nav";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";
import SpecNav from "../Nav/SpecNav";
import Input from "../Input/Input";

const { height, width } = Dimensions.get("window");

const SpecScreen = () => {
  const { specData: data } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      {/* <Nav icon={APP_ICONS.BACK} title={data.name} iconTwo={APP_ICONS.SAVE} /> */}
      <SpecNav icon={APP_ICONS.BACK} title={data.name} uri={data.profile_pic} />
      <View style={{ flex: 1 }}>
        <Text>hi</Text>
      </View>
      <View style={[styles.bottomNav, styles.grid]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn, { marginLeft: 6 }]}
        >
          <Text>{APP_ICONS.IMJIE}</Text>
        </TouchableOpacity>
        <Input placeholder={"Type here"} />
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text>{APP_ICONS.DOC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn, { marginHorizontal: 6 }]}
        >
          <Text>{APP_ICONS.CAMERA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn, { marginRight: 10 }]}
        >
          <Text>{APP_ICONS.MIC}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    height: height,
    backgroundColor: "white",
    flex: 1,
  },
  bottomNav: {
    marginVertical: 10,
    width: "100%",
  },
  btn: {
    backgroundColor: "#242424",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SpecScreen;
