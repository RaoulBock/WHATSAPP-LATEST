import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { APP_PAGES, MESSAGE_LIST_DATA } from "../../context/settings";
import ChatList from "../Card/ChatList";
import { AppContext } from "../../context/AppProvider";
import Model from "../Model/Model";
import SpecScreen from "./SpecScreen";

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
  const { setSpecData, setNavPage, specScreenVisable, setSpecScreenVisable } =
    React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      {specScreenVisable === true && (
        <Model
          visible={specScreenVisable}
          onRequestClose={setSpecScreenVisable}
          children={<SpecScreen />}
        />
      )}
      <ScrollView>
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

const styles = StyleSheet.create({});

export default ChatScreen;
