import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";
import styles, { _textStyle } from "./Countdown.style";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: props.defaultCountdown
    };
  }

  componentDidMount() {
    const { start = moment(), end = moment(), format } = this.props;
    this.interval = setInterval(() => {
      const countDownStart = start.add(1, "second");
      const then = moment(countDownStart).format("DD/MM/YYYY HH:mm:ss");
      const now = moment(end).format("DD/MM/YYYY HH:mm:ss");
      const ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
        moment(then, "DD/MM/YYYY HH:mm:ss")
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
      const { onCoundownOver } = props;
      onCoundownOver && onCoundownOver();
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
      <Text style={textStyle} {...this.props}>
        {countdown}
      </Text>
    );
  }
}

Countdown.propTypes = {
  format: PropTypes.string,
  defaultCountdown: PropTypes.string
};

Countdown.defaultProps = {
  format: "hh:mm:ss",
  textStyle: styles.textStyle,
  defaultCountdown: "- : - : -"
};
