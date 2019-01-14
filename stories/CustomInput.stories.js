import React from "react";
import { storiesOf } from "@storybook/react";
import CustomInput from "../src/components/CustomInput/CustomInput";

storiesOf("Custom Input", module).add("Simple display", () => (
  <CustomInput
    inputProps={{
      placeholder: "Regular"
    }}
    formControlProps={{
      fullWidth: true
    }}
  />
));
