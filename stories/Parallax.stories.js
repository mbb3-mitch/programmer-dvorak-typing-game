import React from "react";
import { storiesOf } from "@storybook/react";
import Parallax from "../src/components/Parallax/Parallax";

storiesOf("Parallax", module).add("Simple display", () => (
  <Parallax menu filter image={require("assets/img/profile-bg.jpg")} />
));
