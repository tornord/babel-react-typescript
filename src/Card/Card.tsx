import React from "react"; // we need this to make JSX compile

var f = (x: number) => x * x; // Testing arrow functions
var d = { ...{ a: 1, b: 2 } }; // Testing spread operator

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card = ({ title, paragraph }: CardProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);
