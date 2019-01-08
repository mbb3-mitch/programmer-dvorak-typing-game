import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import LevelSectionCarousel from "../Components/Sections/LevelSectionCarousel.jsx";
import menuPageStyle from "assets/jss/material-kit-react/views/menuPage.jsx";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typingTests: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/loadTests`)
      .then(
        function(response) {
          this.setState({
            typingTests: response.data.typingTests
          });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
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
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />{" "}
        <Parallax menu filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <LevelSectionCarousel levels={this.state.typingTests} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(menuPageStyle)(MenuPage);
