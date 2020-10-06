import React from "react";

import Button from "../Button/Button";
import classes from "./NavCard.module.scss";

export default function NavCard(props) {
  return (
    <div className={classes.NavCard}>
      <div className={classes.NavCard__ImageHolder}>
        <img
          src={props.src}
          alt={props.alt}
          className={classes.NavCard__Image}
        />
      </div>

      <div className={classes.NavCard__ContentWrapper}>
        <div className={classes.NavCard__ContentWrapper__Header}>
          <h3>{props.Header}</h3>
        </div>
        <div className={classes.NavCard__ContentWrapper__Content}>
          {props.content}
        </div>
        {props.linkComponent && (
          <div className={classes.NavCard__ContentWrapper__Button}>
            <Button>{props.linkComponent}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
