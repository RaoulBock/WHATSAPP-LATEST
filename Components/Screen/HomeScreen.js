import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Ionicons, FontAwesome5 } from "react-native-vector-icons";
import ChatScreen from "./ChatScreen";
import StatusScreen from "./StatusScreen";
import CallScreen from "./CallScreen";
import { APP_ICONS } from "../../context/settings";

// Define the components for each tab
const ChatsRoute = () => <ChatScreen />;

const StatusRoute = () => <StatusScreen />;

const CallsRoute = () => <CallScreen />;

// Map the routes to the corresponding components
const renderScene = SceneMap({
  chats: ChatsRoute,
  status: StatusRoute,
  calls: CallsRoute,
});

// Custom TabBar
const renderTabBar = (props) => (
  <TabBar
    {...props}
    style={styles.tabBar}
    indicatorStyle={styles.indicator}
    labelStyle={styles.tabLabel}
  />
);

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "chats", title: "Chats" },
    { key: "status", title: "Status" },
    { key: "calls", title: "Calls" },
  ]);
  return (
    <View style={styles.outline}>
      <View style={[styles.nav, styles.grid]}>
        <Text style={styles.navText}>WhatsApp</Text>

        <View style={styles.gridOptions}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.CAMERA}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.SEARCH}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text>{APP_ICONS.DOTS}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  nav: {
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gridOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navText: {
    color: "#1d1d1d",
    fontWeight: "600",
    fontSize: 26,
  },
  tabBar: {
    backgroundColor: "white", // Tab bar background color
  },
  tabLabel: {
    color: "black", // Tab text color
  },
  indicator: {
    backgroundColor: "black", // Scroller/indicator color
  },
  btn: {
    backgroundColor: "#242424",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
