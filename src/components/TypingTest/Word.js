import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  successColor,
  dangerColor
} from "assets/jss/material-kit-react.jsx";

const styles = {
  word : {
    display : "inline-block",
    margin : "2px"
  },
  "word--current" : {
    "background-color" : "#ddd",
    "border-radius" : "3px",
  },
  "word--incorrect" : {
    color : dangerColor
  },
  "word--correct" : {
    color : successColor
  }
};

function Word(props) {
  const classes = props.classes;
  const wordClasses = classNames({
    [classes["word"]] : true,
    "word--current" : props.current,
    [classes["word--current"]] : props.current,
    [classes["word--incorrect"]] : props.status === "incorrect",
    [classes["word--correct"]] : props.status === "correct"
  });
  let value;
  if (props.status === "correct") {
    value = <h3 className={wordClasses}>{props.value}</h3>;
  } else if (props.status === "incorrect") {
    value = <h3 className={wordClasses}>{props.value}</h3>;
  } else {
    value = <h3 className={wordClasses}>{props.value}</h3>;
  }
  return (value);
}

Word.propTypes = {
  classes : PropTypes.object.isRequired,
  value : PropTypes.string.isRequired,
  status : PropTypes.string,
  current : PropTypes.bool
};

export default withStyles(styles)(Word);
