import React from "react";
import { Link } from "react-router-dom";

export default function RouterLink(props) {
  return <Link to={props.path}>{props.content}</Link>;
}
