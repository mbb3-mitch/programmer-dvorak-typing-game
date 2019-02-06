import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RestoreIcon from "@material-ui/icons/Restore";

const styles = {
  fab: {
    margin: "10px"
  }
};

class FloatingActionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.which === 75 && e.ctrlKey && e.altKey) {
      this.props.restart();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <span>
        <Button
          title="ctrl + alt + k"
          variant="contained"
          color="secondary"
          aria-label="Restore"
          className={classes.fab}
          onClick={() => {
            this.props.restart();
          }}
        >
          <RestoreIcon />
        </Button>
      </span>
    );
  }
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  restart: PropTypes.func.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
