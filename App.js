import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import AppProvider, { AppContext } from "./context/AppProvider";
import { APP_PAGES } from "./context/settings";
import SpecScreen from "./Components/Screen/SpecScreen";
import HomeScreen from "./Components/Screen/HomeScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);

  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <View style={styles.outline}>
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.SPEC_CHAT && <SpecScreen />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  nav: {
    padding: 10,
  },
  navText: {
    color: "#1d1d1d",
    fontWeight: "600",
    fontSize: 16,
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
});
