import React from "react";
import classes from "./Card.module.scss";

export default function Card(props) {

  const pageClass = () => {
    if (props.entry) {
      return classes.Card__Entry
    }
    if (props.about) {
      return classes.Card__About;
    }
  }
  return (
    <div className={[classes.Card, pageClass()].join(" ")} >
      <div className={classes.Card__ImageHolder}>
        <img src={props.src} alt={props.alt} className={classes.Card__Image} />
      </div>

      <div className={classes.Card__ContentWrapper}>
        {props.header ? (
          <div className={classes.Card__ContentWrapper__Header}>
            <h3>{props.header}</h3>
          </div>
        ) : (
            ""
          )}
        <div
          className={classes.Card__ContentWrapper__Content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  );
}


