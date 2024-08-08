import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import Nav from "../Nav/Nav";
import { APP_ICONS, MESSAGE_LIST_DATA } from "../../context/settings";
import ChatList from "../Card/ChatList";
import { AppContext } from "../../context/AppProvider";

const { width, height } = Dimensions.get("window");

const ArchiveScreen = () => {
  const { setSpecScreenVisable, setSpecData, setArchivedVisable } =
    React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav
        icon={APP_ICONS.BACK}
        title={"Archive"}
        iconTwo={APP_ICONS.DOTS}
        onPress={() => setArchivedVisable(false)}
      />
      <ScrollView>
        <Text style={styles.description}>
          These chats stay archived when new messages are received. Tap to
          change
        </Text>
        <View>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    height: height,
    backgroundColor: "white",
  },
  description: {
    color: "gray",
    fontWeight: "400",
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 16,
  },
});

export default ArchiveScreen;
