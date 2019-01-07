import React from "react";

class Results extends React.Component {
  render() {
    return (
      <ul id="results">
        <li>WPM: <span className="wpm-value">{this.props.wpm}</span></li>
        <li>Accuracy: <span className="wpm-value">{Math.ceil(this.props.accuracy * 100)}%</span></li>
        <li id="results-stats">
          Total Words: <span>{this.props.totalWordCount}</span> | Correct Words: <span>{this.props.correctWordCount}</span> | Incorrect Words: <span>{this.props.incorrectWordCount}</span> | Characters Typed: <span>{this.props.charactersTyped}<span className='word--incorrect'>({this.props.incorrectCharactersTyped})</span></span>
        </li>
      </ul>
    );
  }
}

export default Results;