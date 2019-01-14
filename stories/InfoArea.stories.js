import React from "react";
import { storiesOf } from "@storybook/react";
import InfoArea from "../src/components/InfoArea/InfoArea";
import Chat from "@material-ui/icons/Chat";

storiesOf("InfoArea", module).add("Simple display", () => (
  <InfoArea
    title="Free Chat"
    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
    icon={Chat}
    iconColor="info"
    vertical
  />
));
