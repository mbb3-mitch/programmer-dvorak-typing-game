import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RestoreIcon from "@material-ui/icons/Restore";

const styles = {
  fab : {
    margin : "10px"
  }
};

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <span>
      <Button variant="contained" color="secondary" aria-label="Restore" className={classes.fab} onClick={()=>{props.restart()}}>
        <RestoreIcon/>
      </Button>
    </span>
  );
}

FloatingActionButtons.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);