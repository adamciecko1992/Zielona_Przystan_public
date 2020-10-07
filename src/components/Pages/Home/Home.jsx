import React, { useEffect, useRef } from "react";
import classes from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../../RouterLink/RouterLink";
import NavCard from "../../UI/NavCard/NavCard";
import Button from "../../UI/Button/Button"
// import video from "../../../assets/video/green_ink_01.mp4"

export default function Home(props) {
  const cardsContentArr = Object.entries(props.content.cards);
  let headingsHeight;
  let headingsRef = useRef()
  useEffect(() => {
    headingsHeight = headingsRef.current.getBoundingClientRect().bottom;
  }, [headingsHeight])

  return (
    <Container fluid className={classes.Home}>
      <Row className={classes.Home__Headings} ref={headingsRef}>
        <Col>

          <h1 className={classes.Home__Headings__Heading}>{props.content.header}</h1>
          <h3 className={classes.Home__Headings__Subtitle}>{props.content.subheader}</h3>
          <div className={classes.Home__Headings__Button}>
            <Button home onClick={() => window.scroll({ top: headingsHeight, behavior: 'smooth' })}>{props.content.moreButton}</Button>
          </div>
        </Col>
      </Row>

      <Container className={classes.Home__NavCards} fluid>

        <Row className="d-flex justify-content-center">
          {cardsContentArr.map((cardContent) => {
            const name = cardContent[0];
            const contentObject = cardContent[1];

            return (
              <Col className={classes.Home__NavCard} sm={6} md={4} lg={4} xs={6}>
                <NavCard
                  Header={contentObject.header}
                  linkComponent={
                    <Link path={`/${name}`} content={contentObject.link} />
                  }
                  src={contentObject.url}
                  alt={contentObject.alt}
                  content={contentObject.content}
                />
              </Col>
            );
          })}
        </Row>

      </Container>
    </Container>
  );
}
