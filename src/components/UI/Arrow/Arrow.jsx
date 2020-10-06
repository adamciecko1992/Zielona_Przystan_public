import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Arrow({ right, left, up, down }) {
  const arrow = () => {
    if (right) {
      return faArrowRight;
    }
    if (left) {
      return faArrowLeft;
    }
    if (up) {
      return faArrowUp;
    }
    if (down) {
      return faArrowDown;
    }
  };
  return <FontAwesomeIcon icon={arrow()} />;
}
