import React from "react";
import ReactDOMServer from "react-dom/server";
import { Card } from "./Card";

const el = <Card title="Welcome!" paragraph="To this example" />;
var x = ReactDOMServer.renderToStaticMarkup(el);
console.log(x);
