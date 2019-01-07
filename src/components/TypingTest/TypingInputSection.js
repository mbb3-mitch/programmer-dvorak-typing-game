import React from "react";
import TypingTextBox from "./TypingTextBox.jsx";


class TypingInputSection extends React.Component {
  render() {
    return (
        <TypingTextBox handleSubmitWord={this.props.handleSubmitWord} handleChange={this.props.handleChange} disabled={this.props.finished} inputField={this.props.inputField}/>
    );
  }
}

export default TypingInputSection;