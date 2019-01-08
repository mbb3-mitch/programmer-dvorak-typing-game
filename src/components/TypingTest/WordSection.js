import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Word from "./Word";

const styles = {
  card: {
    minWidth: 275,
    textAlign: "left",
    maxHeight: "18vh"
  }
};

function WordSetion(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        {props.words.length ? (
          props.words.map((word, i) => {
            return (
              <Word key={i} value={word.value} current={word.current} status={word.status}/>
            );
          })
        ) : <div className="waiting"><span role="img" aria-label="Hourglass">⌛</span></div>}
      </CardContent>
    </Card>
  );
}

WordSetion.propTypes = {
  classes: PropTypes.object.isRequired,
  words : PropTypes.array
};

export default withStyles(styles)(WordSetion);