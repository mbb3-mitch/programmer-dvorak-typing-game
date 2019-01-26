import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import PurposeSection from "./Sections/PurposeSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import SectionTypingTest from "views/Components/Sections/SectionTypingTest.jsx";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      gameState: null
    };
  }
  _getConfigData(props) {
    axios
      .get(`/api/typing/practice/500_words`)
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
    this._getConfigData(this.props);
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
          brand="Burbledy typing"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.sectionTypingTest}>
            <SectionTypingTest
              gameState={this.state.gameState}
              cardAnimaton={this.state.cardAnimaton}
            />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PurposeSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
