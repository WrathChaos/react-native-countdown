import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import moment from "moment";
import styles, { _textStyle } from "./Countdown.style";

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "-",
      minutes: "-",
      seconds: "-"
    };
  }

  componentDidMount() {
    const { start = moment(), end = moment() } = this.props;

    this.interval = setInterval(() => {
      let startTime = start;
      let newStartTime = startTime.add(1, "second");
      let endTime = end;
      const diff = moment
        .utc(
          moment(endTime, "DD/MM/YYYY HH:mm:ss").diff(
            moment(newStartTime, "DD/MM/YYYY HH:mm:ss")
          )
        )
        .utcOffset(0);

      console.log("Diff:", diff);

      if (diff <= 0) {
        this.setState({ hours: "00", minutes: "00", seconds: "00" });
        clearInterval(this.interval);
      } else {
        const hours = diff.format("HH");
        const minutes = diff.format("mm");
        const seconds = diff.format("ss");
        this.setState({ hours, minutes, seconds });
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
    const { hours, minutes, seconds } = this.state;
    return (
      <Text style={textStyle} {...this.props}>
        {`${hours} : ${minutes} : ${seconds}`}
      </Text>
    );
  }
}

Countdown.defaultProps = {
  textStyle: styles.textStyle
};
