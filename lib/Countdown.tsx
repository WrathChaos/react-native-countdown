import React, { Component } from "react";
import { Text } from "react-native";
import moment from "moment";
/**
 * ? Local Imports
 */
import styles from "./Countdown.style";

export interface ICountdownProps {
  end: moment.Moment;
  start: moment.Moment;
  format?: string;
  textStyle?: any;
  defaultCountdown?: string;
  onCountdownOver?: () => void;
}

interface IState {
  countdown: string;
  hours: string;
  minutes: string;
  seconds: string;
  timer: any;
}

export default class Countdown extends Component<ICountdownProps, IState> {
  interval: any = null;

  constructor(props: ICountdownProps) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      timer: undefined,
      countdown: (props.defaultCountdown = "- : - : -"),
    };
  }

  componentDidMount() {
    const {
      start = moment(),
      end = moment(),
      format = "hh:mm:ss",
    } = this.props;
    this.interval = setInterval(() => {
      const countDownStart = start.add(1, "second");
      const then = moment(countDownStart).format("DD/MM/YYYY HH:mm:ss");
      const now = moment(end).format("DD/MM/YYYY HH:mm:ss");
      const ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
        moment(then, "DD/MM/YYYY HH:mm:ss"),
      );
      const duration = moment.duration(ms);
      const countdown = duration.format(format);

      if (ms <= 0) {
        this.setState({ hours: "00", minutes: "00", seconds: "00" });
        clearInterval(this.interval);
      } else {
        this.setState({ countdown });
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      const { onCountdownOver } = this.props;
      onCountdownOver && onCountdownOver();
      clearInterval(this.interval);
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { textStyle } = this.props;
    const { countdown } = this.state;
    return (
      <Text style={[styles.textStyle, textStyle]} {...this.props}>
        {countdown}
      </Text>
    );
  }
}
