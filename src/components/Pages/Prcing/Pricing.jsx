import React from "react";
import classes from "./Cennik.module.scss";
import { Container } from "react-bootstrap";

export default function Cennik() {
  return (
    <div className={classes.Cennik}>
      <h1>Cennik</h1>
      <Container className="p-0">
        <table className="table shadow">
          <thead className="bg-primary">
            <tr>
              <th scope="col">Dzień</th>
              <th scope="col">1 osoba</th>
              <th scope="col">2 osoby</th>
              <th scope="col">3+ osoby</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}
