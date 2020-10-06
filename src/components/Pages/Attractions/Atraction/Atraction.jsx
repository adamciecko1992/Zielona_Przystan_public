import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Atraction(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
      <Card className="shadow mx-auto rounded-0">
        <Card.Img
          variant="top"
          src={props.url}
          style={{ height: "15rem", objectFit: "cover", zIndex: "20" }}
          className="border-0 p-0 rounded-0"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button variant="primary">
            <a href={props.href}>Więcej</a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
