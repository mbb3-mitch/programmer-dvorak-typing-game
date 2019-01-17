import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TypingTest from "components/TypingTest/TypingTest.jsx";

import typingPageStyle from "assets/jss/material-kit-react/views/typingPage.jsx";

class SectionTypingTest extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            {" "}
            <GridItem xs={12} sm={12} md={12}>
              {" "}
              <Card className={classes[this.props.cardAnimaton]}>
                {" "}
                <CardBody>
                  {this.props.gameState && (
                    <TypingTest gameState={this.props.gameState} />
                  )}
                </CardBody>{" "}
              </Card>{" "}
            </GridItem>{" "}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(typingPageStyle)(SectionTypingTest);
