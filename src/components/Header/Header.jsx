import React from "react";
import classes from "./Header.module.scss";
import LanguagesDropdown from "../UI/LanguageDropdown/LanguageDropdown";
import HeaderButton from "./HeaderButton/HeaderButton";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const url = useLocation();
  const Button = url.pathname === "/" ? <div></div> : <HeaderButton />;

  return (
    <div
      className={`${classes.Header} d-flex justify-content-between pr-5 pt-3`}
    >
      {Button}
      <div className="d-flex">

        <LanguagesDropdown setCurrentLanguage={props.setCurrentLanguage} />
      </div>
    </div>
  );
}
