import React from "react";
import classNames from "classnames";

import "./NewButton.css";

export default function NewButton(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
    "button--clear": props.clear,
    "button--sm--clear": props.sm
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
