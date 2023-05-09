import React from "react";
import { View } from "react-native";
import Countdown from "@freakycoder/react-native-countdown";
import moment from "moment";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Countdown
        start={moment(1578247689000)}
        end={moment(1578557635000)}
        defaultCountdown=" - / - : - : -"
        format="d[d]  hh:mm:ss"
      />
    </View>
  );
};

export default App;
