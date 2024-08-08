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
  ScrollView,
  Animated,
} from "react-native";
import Nav from "../Nav/Nav";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";
import SpecNav from "../Nav/SpecNav";
import Input from "../Input/Input";
import ReceiverCard from "../Card/ReceiverCard";
import SenderCard from "../Card/SenderCard";

const { height, width } = Dimensions.get("window");

const SpecScreen = () => {
  const {
    specData: data,
    setNavPage,
    setSpecScreenVisable,
  } = React.useContext(AppContext);

  const [userInput, setUserInput] = React.useState("");
  const inputWidth = React.useRef(new Animated.Value(width)).current;
  const iconOpacity = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(inputWidth, {
      toValue: userInput.length > 0 ? 300 : 100,
      duration: width,
      useNativeDriver: false,
    }).start();

    Animated.timing(iconOpacity, {
      toValue: userInput.length > 0 ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [userInput]);

  return (
    <View style={styles.outline}>
      <SpecNav
        icon={APP_ICONS.BACK}
        title={data.name}
        uri={data.profile_pic}
        onPress={() => {
          // setNavPage(APP_PAGES.APP.HOME);
          setSpecScreenVisable(false);
        }}
      />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <ReceiverCard text={"Hey how are you today?"} time={"12:00 am"} />
        <SenderCard
          text={"Im great its been a while, how are you doing?"}
          time={"12:02 am"}
          status={APP_ICONS.READ}
        />
        <ReceiverCard text={"Its been wild, where you at?"} time={"12:05 am"} />
        <SenderCard
          text={"Still in the same place"}
          time={"14:04 pm"}
          status={APP_ICONS.SENT}
        />
      </View>
      <View style={[styles.bottomNav, styles.grid]}>
        <View style={styles.smallGrid}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.btn, { marginLeft: 6 }]}
          >
            <Text>{APP_ICONS.IMJIE}</Text>
          </TouchableOpacity>
          <Animated.View style={{ width: inputWidth }}>
            <Input
              placeholder={"Type here"}
              onChangeText={(e) => setUserInput(e)}
            />
          </Animated.View>
        </View>

        {userInput.length > 0 ? (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.btn, { marginRight: 10 }]}
            >
              <Text>{APP_ICONS.CHEVRON_FORWARD}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Animated.View style={{ flexDirection: "row", opacity: iconOpacity }}>
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
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    height: height,
    backgroundColor: "white",
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
    justifyContent: "space-between",
  },
  smallGrid: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SpecScreen;
