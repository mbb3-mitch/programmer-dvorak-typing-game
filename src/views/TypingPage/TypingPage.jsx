import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TypingTest from "components/TypingTest/TypingTest.jsx";
import axios from "axios";

import typingPageStyle from "assets/jss/material-kit-react/views/typingPage.jsx";

import image from "assets/img/bg7.jpg";

class TypingPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      gameState: null
    };
  }

  componentWillReceiveProps(prevProps) {
    if (this.props.match !== prevProps.match) {
      this._getTestData(prevProps);
    }
  }

  _getTestData(props) {
    axios
      .get(`/api/typing-test/${props.match.params.id}`)
      .then(response => {
        this.setState({
          match: props.match,
          gameState: response.data
        });
      })
      .catch(error => {
        console.log(error);
        return {};
      });
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this._getTestData(this.props);
    setTimeout(() => {
      this.setState({
        cardAnimaton: ""
      });
    }, 300);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Amazazing Game"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />{" "}
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              {" "}
              <GridItem xs={12} sm={12} md={12}>
                {" "}
                <Card className={classes[this.state.cardAnimaton]}>
                  {" "}
                  <CardBody>
                    {this.state.gameState && (
                      <TypingTest gameState={this.state.gameState} />
                    )}
                  </CardBody>{" "}
                </Card>{" "}
              </GridItem>{" "}
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(typingPageStyle)(TypingPage);
