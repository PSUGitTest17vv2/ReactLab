import React from "react";
import Lifcomponent from "./Lifcomponent";

export default function ulfcomponent(props) {
  const elements = props.elements;
  const listItems = elements.map((element) => (
    <Lifcomponent id={element.id} content={element.content} />
  ));
  return <ul>{listItems}</ul>;
}
