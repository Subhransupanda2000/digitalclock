import React, { Component } from "react";
export default class DigitalClock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.IntervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="clock-container ">
        <h1 className="clock">{this.state.time}</h1>
      </div>
    );
  }
}
