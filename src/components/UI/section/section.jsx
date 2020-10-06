import React, { useEffect, useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import windowContext from "../../../context/context";
import classes from "./section.module.scss";

export default function Section(props) {
  const context = useContext(windowContext);
  const { currentSection, setBgImg, setCurrentSection, pageYOffset } = context;
  const container = useRef(null);

  useEffect(() => {
    const yPosition = container.current.getBoundingClientRect().y;
    if (yPosition < 0) {
      setCurrentSection(props.id);
    }
  }, [pageYOffset, setCurrentSection, props.id]);

  useEffect(() => {
    if (currentSection === props.id) {
      setBgImg(props.url);
    }
  }, [props.id, props.url, currentSection, setBgImg]);

  return (
    <section
      className={classes.Section}
      id={props.id}
      ref={container}
      style={{ minHeight: `${props.height}` }}
    >
      <Container>{props.children}</Container>
    </section>
  );
}
