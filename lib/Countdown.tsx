import * as React from "react";
import { Text, TextStyle, StyleProp, ViewStyle } from "react-native";
import moment from "moment";
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
/**
 * ? Local Imports
 */
import styles from "./Countdown.style";

interface CountdownProps {
  end: moment.Moment;
  start: moment.Moment;
  format?: string;
  defaultCountdown?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onCountdownOver?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  style,
  textStyle,
  start,
  end,
  format = "hh:mm:ss",
  onCountdownOver,
  defaultCountdown = "- : - : -",
  ...rest
}) => {
  let interval;

  const [hours, setHours] = React.useState<string>();
  const [minutes, setMinutes] = React.useState<string>();
  const [seconds, setSeconds] = React.useState<string>();
  const [countdown, setCountdown] = React.useState<string>();
  const [timer, setTimer] = React.useState();

  React.useEffect(() => {
    interval = setInterval(() => {
      const countDownStart = start.add(1, "second");
      const then = moment(countDownStart).format("DD/MM/YYYY HH:mm:ss");
      const now = moment(end).format("DD/MM/YYYY HH:mm:ss");
      const ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
        moment(then, "DD/MM/YYYY HH:mm:ss"),
      );
      const _countdown = moment.duration(ms).format(format);

      if (ms <= 0) {
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        clearInterval(interval);
      } else {
        setCountdown(_countdown);
      }
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (timer === 1) {
      clearInterval(interval);
      onCountdownOver?.();
      // this.forceUpdate();
    }
  }, [timer]);

  return (
    <Text style={[styles.textStyle, textStyle]} {...rest}>
      {countdown}
    </Text>
  );
};

export default Countdown;
