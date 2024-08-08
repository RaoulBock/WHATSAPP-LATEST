import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { APP_PAGES, MESSAGE_LIST_DATA } from "../../context/settings";
import ChatList from "../Card/ChatList";
import { AppContext } from "../../context/AppProvider";

const ChatScreen = () => {
  const { setSpecData, setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
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
                setNavPage(APP_PAGES.APP.SPEC_CHAT);
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
