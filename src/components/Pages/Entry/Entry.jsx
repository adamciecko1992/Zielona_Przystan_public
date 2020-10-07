import React from "react";
import classes from "./Entry.module.scss";
import useToTop from "../../../hooks/useToTop";
import useWindowResize from "../../../hooks/useWindowResize";
import { Container } from "react-bootstrap";
import EntryWideGrid from "./Entry_WideGrid/Entry_WideGrid";
import Entry_NarrowGrid from "./Entry_NarrowGrid/Entry_NarrowGrid";

export default function Reservation(props) {
  useToTop();
  const windowSize = useWindowResize();
  console.log(windowSize)

  return (
    <section className={classes.Entry}>
      <Container>
        <h1 className={classes.Entry__Header}>{props.content.header}</h1>
        {
          windowSize.width > 1000 ?
            <EntryWideGrid content={props.content.steps} /> :
            <Entry_NarrowGrid content={props.content.steps} />
        }
      </Container>
    </section>
  );
}
