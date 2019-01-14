import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "../src/components/Badge/Badge";

storiesOf("Badge", module).add("Simple display", () => (
  <div>
    <Badge>default</Badge>
    <Badge color="primary">primary</Badge>
    <Badge color="info">info</Badge>
    <Badge color="success">success</Badge>
    <Badge color="warning">warning</Badge>
    <Badge color="danger">danger</Badge>
    <Badge color="rose">rose</Badge>
  </div>
));
