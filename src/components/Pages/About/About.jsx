import React from "react";
import useToTop from "../../../hooks/useToTop";
import classes from "./About.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Tile from "./Tile/Tile";
import Card from "../../UI/Card/Card";

export default function About({ content }) {
  useToTop();

  return (
    <>

      <Container fluid className={classes.About}>
        <Row>
          <Col className={classes.About__Article}>
            <h4 className={classes.About__Article__Subheader}>
              {content.subheader}
            </h4>
            <h1 className={classes.About__Article__Header}>
              {content.header}
            </h1>
            <p className={classes.About__Article__Content}>
              {content.paragraph}
            </p>
          </Col>
          <Col className={classes.About__Aside}>
            {content.cards.map((cardContent) => {
              return (
                <Card
                  title={cardContent.title}
                  content={cardContent.content}
                  icon={cardContent.icon}
                  about
                  header={cardContent.header}
                />
              );
            })}
          </Col>
        </Row>
      </Container>

    </>

  );
}
