import React from "react";
import { storiesOf } from "@storybook/react";
import CustomDropdown from "../src/components/CustomDropdown/CustomDropdown";

storiesOf("Custom Dropdown", module).add("Simple display", () => (
  <CustomDropdown
    buttonText="Dropdown"
    dropdownHeader="Dropdown Header"
    buttonProps={{
      color: "transparent"
    }}
    dropdownList={[
      "Action",
      "Another action",
      "Something else here",
      { divider: true },
      "Separated link",
      { divider: true },
      "One more separated link"
    ]}
  />
));
