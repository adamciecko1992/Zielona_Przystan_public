import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "../Header.module.scss";

export default function HeaderButton() {
  return (
    <Link to="/">
      <Button variant="outline-light" className={classes.Header__Button}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        <p className="mb-0"> Powrót</p>
      </Button>
    </Link>
  );
}
