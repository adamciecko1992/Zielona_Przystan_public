import React from "react";
import classes from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={`${classes.Footer} w-100`}>
      <div className="col-lg-6">
        <h4>{props.content.title}</h4>
      </div>
      <div className="col-lg-6" dangerouslySetInnerHTML={{ __html: props.content.author }}></div>
    </footer>
  );
}
