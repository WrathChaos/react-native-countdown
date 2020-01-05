import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import Countdown from "./lib/src/Countdown";
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
