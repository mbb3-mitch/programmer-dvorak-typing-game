import React from "react";

class Results extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <span className="wpm-value">WPM: {this.props.wpm}</span> |{" "}
          <span className="wpm-value">
            Accuracy: {Math.ceil(this.props.accuracy * 100)}%
          </span>
        </h4>
        <h4>
          {" "}
          Total Words: {this.props.totalWordCount} | Correct Words:
          {this.props.correctWordCount} | Incorrect Words:{" "}
          {this.props.incorrectWordCount} | Characters Typed:{" "}
          {this.props.charactersTyped}
          <span className="word--incorrect">
            ({this.props.incorrectCharactersTyped})
          </span>
        </h4>
      </div>
    );
  }
}

export default Results;
