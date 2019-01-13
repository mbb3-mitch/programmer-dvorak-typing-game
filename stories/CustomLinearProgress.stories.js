import React from "react";
import { storiesOf } from "@storybook/react";
import CustomLinearProgress from "../src/components/CustomLinearProgress/CustomLinearProgress";

storiesOf("Custom Linear Progress", module).add("Simple display", () => (
  <CustomLinearProgress variant="determinate" color="primary" value={30} />
));
