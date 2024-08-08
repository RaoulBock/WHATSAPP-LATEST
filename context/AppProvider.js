import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [specData, setSpecData] = React.useState("");
  const [specScreenVisable, setSpecScreenVisable] = React.useState(false);
  const [userDetailVisable, setUserDetailVisable] = React.useState(false);
  const [chatLockEnable, setChatLockEnable] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        specData,
        setSpecData,
        specScreenVisable,
        setSpecScreenVisable,
        userDetailVisable,
        setUserDetailVisable,
        chatLockEnable,
        setChatLockEnable,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
