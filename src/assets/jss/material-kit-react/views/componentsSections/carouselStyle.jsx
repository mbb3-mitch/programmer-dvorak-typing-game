const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  gameMenuSection: {
    padding: "20px 0"
  },
  slide: {
    height: "60vh",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing"
    },
    "&:hover": {
      border: "5px solid #010217"
    }
  },
  slide__image: {
    height: "100%",
    opacity: ".6"
  },
  slide__levelID: {
    position: "absolute",
    right: "15%",
    top: "30%",
    left: "15%",
    "z-index": "10",
    color: "#ffffff",
    "text-align": "center",
    "background-color": "rgba(180,180,180,.6)",
    "border-radius": "3px",
    "text-shadow": "2px 2px #888;"
  },
  slide__select: {
    display: "none"
  }
};

export default carouselStyle;
