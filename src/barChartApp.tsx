import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { BarChart } from "./BarChart";
import pretty from "pretty";

const values = [14, 31, 35, 19, 6];

const el = <BarChart values={values} />;
var svg = pretty(ReactDOMServer.renderToStaticMarkup(el));

fs.writeFileSync("./lib/barchart.html", svg, "utf-8");
