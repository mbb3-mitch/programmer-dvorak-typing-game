import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.props.finished) {
      return;
    }
    if (this.props.started && !this.props.paused) {
      let timeElapsed = this.props.timeElapsed + 1;
      this.props.updateTimeElapsed(timeElapsed);
      return;
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let minute = Math.floor(this.props.timeElapsed / 60);
    let seconds = this.props.timeElapsed % 60;
    let time = `${minute}:${seconds > 9 ? seconds : "0" + seconds}`;
    return (
      <div className="type-btn timer">{time}</div>
    );
  }
}

export default StopWatch;