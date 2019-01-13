import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../src/components/Card/Card";
import CardHeader from "../src/components/Card/CardHeader";
import CardBody from "../src/components/Card/CardBody";
import CardFooter from "../src/components/Card/CardFooter";

storiesOf("Card", module).add("Simple display", () => (
  <Card>
    <CardHeader>Card Header</CardHeader>
    <CardBody>Card Body</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
));
