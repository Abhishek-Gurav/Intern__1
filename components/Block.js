import React from "react";

function Block(props) {
  return (
      <div class={props.class}>{props.text}</div>
  );
}

export default Block;
