import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faKey, faUsers, faParking, faUtensils, faMoon } from '@fortawesome/free-solid-svg-icons'
import classes from "./Tile.module.scss";

export default function Tile(props) {

  const icon = () => {
    if (props.icon) {
      switch (props.icon) {
        case 'City':
          return faCity;
        case 'Key':
          return faKey;
        case 'Users':
          return faUsers;
        case 'Parking':
          return faParking;
        case 'Utensils':
          return faUtensils;
        case 'Moon':
          return faMoon;
        default:
          return null;
      }
    } else {
      return null;
    }
  }
  return (

    <div
      className={classes.Tile}
    >
      <div className={`${classes.iconHolder} w-25`}>
        <FontAwesomeIcon icon={icon()} />
      </div>
      <h3>{props.title}</h3>
      <p className="ml-4 w-75" dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>

  );
}
