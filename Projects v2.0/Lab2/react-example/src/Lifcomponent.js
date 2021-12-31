import React from "react";

export default function lifcomponent(props) {
  return <li key={props.id}>{props.content}</li>;
}
