import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Countdown from "@freakycoder/react-native-countdown";
import moment from "moment";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Countdown start={moment(1578240964000)} end={moment(1578244564000)} />
      </SafeAreaView>
    </>
  );
};

export default App;
