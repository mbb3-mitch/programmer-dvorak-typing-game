import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import SectionTypingTest from "views/Components/Sections/SectionTypingTest.jsx";
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
      this._getConfigData(prevProps);
    }
  }

  _getConfigData(props) {
    axios
      .get(
        `/api/typing/${props.match.params.typingMode}/${
          props.match.params.category
        }/${props.match.params.id}`
      )
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
          brand="Typing Dvorak"
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
            <SectionTypingTest
              gameState={this.state.gameState}
              cardAnimaton={this.state.cardAnimaton}
            />
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(typingPageStyle)(TypingPage);
