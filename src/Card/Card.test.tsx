import React from "react";
import ReactDOMServer from "react-dom/server";
import { expect } from "chai";
import { Card } from "./Card";

describe("Card", function () {
  it("should return html", function () {
    const el = <Card title="Welcome!" paragraph="To this example" />;
    var x = ReactDOMServer.renderToStaticMarkup(el);
    expect(x).to.equal("<aside><h2>Welcome!</h2><p>To this example</p></aside>");
  });
});
