import React from "react";
import StopWatch from "./Stopwatch";

class CountDownTimer extends StopWatch {
  tick() {
    if (this.props.finished) {
      return;
    }
    if (this.props.timeElapsed >= this.props.testDuration) {
      this.props.handleTimeUp();
      return;
    }
    if (this.props.started && !this.props.paused) {
      let timeElapsed = this.props.timeElapsed + 1;
      this.props.updateTimeElapsed(timeElapsed);
    }
  }

  secondsRemaining() {
    return this.props.testDuration - this.props.timeElapsed;
  }

  render() {
    let minute = Math.floor(this.secondsRemaining() / 60);
    let seconds = this.secondsRemaining() % 60;
    let time = `${minute}:${seconds > 9 ? seconds : "0" + seconds}`;
    return <div className="type-btn timer">{time}</div>;
  }
}

export default CountDownTimer;
