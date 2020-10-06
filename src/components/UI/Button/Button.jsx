import classes from "./Button.module.scss";
import React from "react";

export default function Button(props) {


  const buttonClass = props.home ? [classes.Button__Dark, classes.Button].join(" ") : classes.Button;

  return <button className={buttonClass} onClick={() => { props.onClick() }}>{props.children}</button>;
}

Button.defaultProps = {
  onClick: () => { return null }
}
