import React from "react";
import { storiesOf } from "@storybook/react";
import Paginations from "../src/components/Pagination/Pagination";

storiesOf("Paginations", module).add("Simple display", () => (
  <Paginations
    pages={[
      { text: 1 },
      { text: "..." },
      { text: 5 },
      { text: 6 },
      { active: true, text: 7 },
      { text: 8 },
      { text: 9 },
      { text: "..." },
      { text: 12 }
    ]}
  />
));
