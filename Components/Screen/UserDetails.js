import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import Nav from "../Nav/Nav";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";
import CustomModal from "../Model/CustomModel";
import ChatLockView from "../View/ChatLockView";

const { width, height } = Dimensions.get("window");

const UserDetails = () => {
  const {
    specData: data,
    setUserDetailVisable,
    chatLockEnable,
    setChatLockEnable,
  } = React.useContext(AppContext);

  const [muteNotificationEnable, setMuteNotificationEnable] =
    React.useState(false);
  const toggleMuteNotificationSwitch = () =>
    setMuteNotificationEnable((previousState) => !previousState);

  const [lockChatEnable, setLockChatEnable] = React.useState(false);
  const toggleChatLockSwitch = () => {
    setLockChatEnable((previousState) => {
      const newState = !previousState;
      console.log(newState);
      setChatLockEnable(true);
    });
  };

  return (
    <View style={styles.outline}>
      {chatLockEnable === true && (
        <CustomModal
          visible={chatLockEnable}
          onClose={setChatLockEnable}
          children={<ChatLockView />}
        />
      )}

      <Nav
        icon={APP_ICONS.BACK}
        iconTwo={APP_ICONS.DOTS}
        onPress={() => setUserDetailVisable(false)}
      />
      <ScrollView>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: data.profile_pic,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.phone_number}>{data.phone_number}</Text>
        </View>
        <View style={styles.btnOutline}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.PHONE}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.VIDEO}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.SEARCH}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.bio}>
            Labore nostrud reprehenderit laborum amet. Cillum consequat mollit
            dolore adipisicing sit.
          </Text>
        </View>
        <View style={styles.options}>
          <View style={styles.grid}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={styles.title}>Mute notifications</Text>
              <Text style={{ width: width / 1.5 }}>
                Temporarily silence all notifications for this conversation. You
                will no longer receive alerts for new messages until
                notifications are re-enabled.
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#d3d3d3", true: "#4CAF50" }}
              thumbColor={muteNotificationEnable ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#d3d3d3"
              onValueChange={toggleMuteNotificationSwitch}
              value={muteNotificationEnable}
            />
          </View>
          <View style={styles.grid}>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={styles.title}>Chat lock</Text>
              <Text style={{ width: width / 1.5 }}>
                Secure this conversation with a lock, ensuring that only you can
                access its content. Once enabled, the chat will remain private
                and protected until you choose to unlock it.
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#d3d3d3", true: "#4CAF50" }}
              thumbColor={lockChatEnable ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#d3d3d3"
              onValueChange={toggleChatLockSwitch}
              value={lockChatEnable}
            />
          </View>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  userInfo: {
    alignSelf: "center",
  },
  name: {
    color: "#1d1d1d",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 36,
    marginTop: 10,
  },
  phone_number: {
    color: "gray",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#242424",
    padding: 16,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnOutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  bio: {
    color: "#1d1d1d",
    fontSize: 18,

    textAlign: "center",
    lineHeight: 28,
    paddingHorizontal: 32,
  },
  title: {
    color: "#1d1d1d",
    fontWeight: "600",
    fontSize: 18,
  },
  options: {
    marginVertical: 26,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 26,
  },
});

export default UserDetails;
