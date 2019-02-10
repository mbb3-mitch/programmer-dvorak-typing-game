import React from "react";
import { storiesOf } from "@storybook/react";
import CustomTabs from "../src/components/CustomTabs/CustomTabs";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

storiesOf("Custom Linear Progress", module).add("Simple display", () => (
  <CustomTabs
    headerColor="primary"
    tabs={[
      {
        tabName: "Profile",
        tabIcon: Face,
        tabContent: (
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. So when
            you get something that has the name Kanye West on it, it’s supposed
            to be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        )
      },
      {
        tabName: "Messages",
        tabIcon: Chat,
        tabContent: (
          <p>
            I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at. I will be
            the leader of a company that ends up being worth billions of
            dollars, because I got the answers. I understand culture. I am the
            nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        )
      },
      {
        tabName: "Settings",
        tabIcon: Build,
        tabContent: (
          <p>
            think that’s a responsibility that I have, to push possibilities, to
            show people, this is the level that things could be at. So when you
            get something that has the name Kanye West on it, it’s supposed to
            be pushing the furthest possibilities. I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus.
          </p>
        )
      }
    ]}
  />
));
