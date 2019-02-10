import React from "react";
import { storiesOf } from "@storybook/react";
import Danger from "../src/components/Typography/Danger";

storiesOf("Typography", module).add("Simple display", () => (
  <div>
    <Danger>
      I will be the leader of a company that ends up being worth billions of
      dollars, because I got the answers...
    </Danger>
  </div>
));
