/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Lessons"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/menu" className={classes.dropdownLink}>
              Beginner
            </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Intermediate
           </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Master
          </Link>

          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Practice"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/menu" className={classes.dropdownLink}>
              Normal
          </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Hardcore
         </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Continuous typing
        </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Dynamic difficulty
         </Link>,
            <Link to="/menu" className={classes.dropdownLink}>
              Custom
         </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Check out the repo on github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/mbb3-mitch/programmer-dvorak-typing-game"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
