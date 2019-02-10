import React from "react";
import { storiesOf } from "@storybook/react";
import SnackbarContent from "../src/components/Snackbar/SnackbarContent";

storiesOf("SnackbarContent", module).add("Simple display", () => (
  <SnackbarContent
    message={
      <span>
        <b>INFO ALERT:</b> You've got some friends nearby, stop looking at your
        phone and find them...
      </span>
    }
    close
    color="info"
    icon="info_outline"
  />
));
