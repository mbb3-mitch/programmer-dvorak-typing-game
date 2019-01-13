import React from "react";
import { storiesOf } from "@storybook/react";
import GridContainer from "../src/components/Grid/GridContainer";
import GridItem from "../src/components/Grid/GridItem";

storiesOf("Grid", module).add("Simple display", () => (
  <GridContainer>
    <GridItem>
      <div>
        <h1>Material Kit React.</h1>
        <h3>A Badass Material-UI Kit based on Material Design.</h3>
      </div>
    </GridItem>
  </GridContainer>
));
