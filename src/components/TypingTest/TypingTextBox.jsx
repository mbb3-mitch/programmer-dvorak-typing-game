import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CustomInput from "components/CustomInput/CustomInput.jsx";

let styles = {};

class TypingTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      inputField : props.inputField
    };
  }

  handleChange(event) {
    this.props.handleChange(event);
    this.setState({
      inputField : event.target.value
    });
  }

  handleKeyUp(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.props.handleSubmitWord(this.state.inputField.trim());
    }
  }

  render() {
    return (
      <CustomInput inputProps={{
        id : "typing-text-box",
        value : this.props.inputField,
        onChange : this.handleChange,
        onKeyUp : this.handleKeyUp,
        disabled : this.props.disabled,
        autoComplete : "off"
      }}/>
    );
  }
}


TypingTextBox.propTypes = {
  classes : PropTypes.object.isRequired,
  handleChange : PropTypes.func,
  handleSubmitWord : PropTypes.func,
  inputField : PropTypes.string,
  disabled : PropTypes.bool
};

export default withStyles(styles)(TypingTextBox);