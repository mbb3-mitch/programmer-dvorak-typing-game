import React from "react";
import { storiesOf } from "@storybook/react";
import NavPills from "../src/components/NavPills/NavPills";
import Schedule from "@material-ui/icons/Schedule";
import Dashboard from "@material-ui/icons/Dashboard";
import List from "@material-ui/icons/List";

storiesOf("NavPills", module).add("Simple display", () => (
  <NavPills
    color="primary"
    tabs={[
      {
        tabButton: "Dashboard",
        tabIcon: Dashboard,
        tabContent: (
          <span>
            <p>
              Collaboratively administrate empowered markets via
              plug-and-play networks. Dynamically procrastinate
              B2C users after installed base benefits.
            </p>
            <br />
            <p>
              Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after
              installed base benefits.
            </p>
            <br />
            <p>
              Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after
              installed base benefits.
            </p>
          </span>
        )
      },
      {
        tabButton: "Schedule",
        tabIcon: Schedule,
        tabContent: (
          <span>
            <p>
              Efficiently unleash cross-media information without
              cross-media value. Quickly maximize timely
              deliverables for real-time schemas.
            </p>
            <br />
            <p>
              Dramatically maintain clicks-and-mortar solutions
              without functional solutions. Dramatically visualize
              customer directed convergence without revolutionary
              ROI. Collaboratively administrate empowered markets
              via plug-and-play networks. Dynamically
              procrastinate B2C users after installed base
              benefits.
            </p>
          </span>
        )
      },
      {
        tabButton: "Tasks",
        tabIcon: List,
        tabContent: (
          <span>
            <p>
              Collaboratively administrate empowered markets via
              plug-and-play networks. Dynamically procrastinate
              B2C users after installed base benefits.
            </p>
            <br />
            <p>
              Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after
              installed base benefits.
            </p>
            <br />
            <p>
              Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after
              installed base benefits.
            </p>
          </span>
        )
      }
    ]}
  />
));