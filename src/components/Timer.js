import React, { Component } from "react";
import AlarmClock from "./AlarmClock";
class Timer extends Component {
  constructor() {
    super();
    let d = new Date();
    this.state = {
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
    };
    this.countingSecond = this.countingSecond.bind(this);
  }
  countingSecond() {
    let d = new Date();
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
    });
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000);
  }
  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return (
      <>
        <div className="timer__container">
          <AlarmClock/>
          <div className="timer__div">
            <span className="span__option1">Time</span>
            <span className="span__option2">{this.state.time}</span>
          </div>
          <div className="date__div">
            <span className='span__option1'>Date</span>
            <span className='span__option2'> 
              {days[this.state.day]}, {months[this.state.month]}{" "}
              {this.state.date}, {this.state.year}{" "}
            </span>
          </div>

        </div>
      </>
    );
  }
}
export default Timer;
