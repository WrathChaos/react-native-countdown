import React, { Component } from "react";
import { Text, View } from "react-native";
import moment from "moment";
// import "moment-countdown";

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
    this.interval = setInterval(() => {
      //   const { now = moment(), end } = this.props;
      //   const now = moment();
      //   const end = moment().utcOffset(3);
      //   end.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
      var now = moment();
      var mid = moment(1577398232000);
      var diff1 = moment
        .utc(
          moment(mid, "DD/MM/YYYY HH:mm:ss").diff(
            moment(now, "DD/MM/YYYY HH:mm:ss")
          )
        )
        .utcOffset(0)
        .format("HH:mm:ss");

      console.log("moment.js: " + diff1);

      //   const minutes = end.diff(now, "minutes");
      //   const seconds = end.diff(now, "seconds");
      //   const countdown = moment(end - now);
      //   const hours = countdown.format("HH");
      //   const minutes = countdown.format("mm");
      //   const seconds = countdown.format("ss");
      //   this.setState({ hours, minutes, seconds });
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
    const { hours, minutes, seconds } = this.state;
    return (
      <Text
        style={{
          fontSize: 18,
          marginRight: 16,
          color: "red",
          //   fontFamily: "BurbankBigCondensed-Black",
          textAlign: "right"
          //   shadowRadius: 0.4,
          //   shadowOpacity: 0.5,
          //   shadowColor: "#000",
          //   shadowOffset: {
          //     width: 0,
          //     height: 2
          //   }
        }}
      >
        {`${hours} : ${minutes} : ${seconds}`}
      </Text>
    );
  }
}
