import React from "react";
import { Dropdown } from "react-bootstrap";
import plFlag from "../../../assets/flags/211-poland.svg";
import engFlag from "../../../assets/flags/216-england.svg";
import classes from "./LanguageDropdown.module.scss";

export default function LanguageDropdown({ setCurrentLanguage }) {
  return (
    <div>
      <Dropdown className={classes.Dropdown}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className={classes.Dropdown__Toggle}
        >
          <img src={plFlag} alt="poland flag" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setCurrentLanguage("pl")}>
            <img src={plFlag} alt="poland flag" />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setCurrentLanguage("eng")}>
            <img src={engFlag} alt="england flag" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
