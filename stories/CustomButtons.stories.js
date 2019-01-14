import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/CustomButtons/Button";
import RestartButton from "../src/components/CustomButtons/RestartButton";

storiesOf("Custom Buttons", module).add("Simple display", () => (
  <div>
    <Button>Button</Button>
    <RestartButton />
  </div>
));
