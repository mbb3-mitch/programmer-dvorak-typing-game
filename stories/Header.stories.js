import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "../src/components/Header/Header";

storiesOf("Header", module).add("Simple display", () => (
  <Header
    brand="Typing Dvorak"
    fixed
    color="blue"
    changeColorOnScroll={{
      height: 400,
      color: "white"
    }}
  />
));
