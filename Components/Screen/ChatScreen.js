import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  APP_ICONS,
  APP_PAGES,
  MESSAGE_LIST_DATA,
} from "../../context/settings";
import ChatList from "../Card/ChatList";
import { AppContext } from "../../context/AppProvider";
import Model from "../Model/Model";
import SpecScreen from "./SpecScreen";
import ArchiveScreen from "./ArchiveScreen";

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
  const {
    setSpecData,
    setNavPage,
    specScreenVisable,
    setSpecScreenVisable,
    archivedVisable,
    setArchivedVisable,
  } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      {specScreenVisable === true && (
        <Model
          visible={specScreenVisable}
          onRequestClose={setSpecScreenVisable}
          children={<SpecScreen />}
        />
      )}
      {archivedVisable === true && (
        <Model
          visible={archivedVisable}
          onRequestClose={setArchivedVisable}
          children={<ArchiveScreen />}
        />
      )}
      <ScrollView>
        <TouchableOpacity
          style={styles.grid}
          activeOpacity={0.8}
          onPress={() => setArchivedVisable(true)}
        >
          <View style={styles.btn}>
            <Text>{APP_ICONS.ARCHIVE}</Text>
          </View>
          <Text style={styles.text}>Archived</Text>
        </TouchableOpacity>
        {MESSAGE_LIST_DATA.map((e, i) => {
          return (
            <ChatList
              uri={e.profile_pic}
              name={e.name}
              key={i}
              onPress={() => {
                console.log(e);
                setSpecData(e);
                // setNavPage(APP_PAGES.APP.SPEC_CHAT);
                setSpecScreenVisable(true);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#242424",
    padding: 16,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    gap: 16,
  },
  text: {
    fontWeight: "600",
    color: "#1d1d1d",
    fontSize: 18,
  },
});

export default ChatScreen;
