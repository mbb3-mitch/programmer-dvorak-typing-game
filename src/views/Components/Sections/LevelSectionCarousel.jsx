import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import { Link } from "react-router-dom";

import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

class LevelSectionCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { classes } = this.props;
    const settings = {
      focusOnSelect: true,
      infinite: true,
      speed: 350,
      centerMode: true,
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: false,
      arrows: false
    };

    let slides = this.props.levels.map((level, index) => {
      let image = require(`assets/img/textures/texture (${index % 44}).jpg`);
      return (
        <div className={classNames(classes.slide, "slide")} key={index}>
          <img
            src={image}
            alt=""
            className={classNames(
              classes["slide__image"],
              "slide__image",
              "slick-image"
            )}
          />
          <div
            className={classNames(classes["slide__levelID"], "slide__levelID")}
          >
            <h4>{level.levelID}</h4>
            <Link to={`${level.path}`}>
              <Button
                className={classNames(
                  classes["slide__select"],
                  "slide__select"
                )}
                variant="contained"
                color="success"
                size="sm"
              >
                Select
              </Button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div className={classes.gameMenuSection}>
        <div className={classes.container}>
          <GridContainer>
            {" "}
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              {" "}
              <Card carousel>
                {" "}
                <Carousel ref={c => (this.slider = c)} {...settings}>
                  {slides}
                </Carousel>{" "}
              </Card>{" "}
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  className="button"
                  onClick={this.previous}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  className="button"
                  onClick={this.next}
                >
                  Next
                </Button>
              </div>
            </GridItem>{" "}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(LevelSectionCarousel);
