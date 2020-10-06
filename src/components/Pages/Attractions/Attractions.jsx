import React from "react";
import Atrakcja from "./Atraction/Atraction";
import { Row } from "react-bootstrap";

export default function Attractions() {
  return (
    <div className="centralizer row mr-0 ml-0 ">
      <h1>Attractions</h1>
      <Row className="centralizer">
        <Atrakcja
          url="https://uml.lodz.pl/files/public/_processed_/b/5/csm_insta_11_29_5_2af0313104.jpg"
          title="Pasaż róży"
          content="Wyjątkowe łódzkie podwórko"
          href="https://lodz.travel/turystyka/co-zobaczyc/ulica-piotrkowska/pasaz-rozy/"
        />
        <Atrakcja
          url="https://ocdn.eu/pulscms-transforms/1/bcyk9kpTURBXy9iY2YzNjlkZGYxZDI4ZjRlYWE5NWI3MmFiODZmYjFjMS5qcGeTlQMAH80DhM0B-pMFzQMUzQG8kwmmNjU4NmJiBoGhMAE/lodz-ulica-piotrkowska.jpg"
          title="Ulica Piotrkowska"
          content="Najbardziej reprezentacyjna ulica miasta Łódź, pełna pięknych kamienic i podwórek"
          href="https://uml.lodz.pl/czas-wolny/ulica-piotrkowska/"
        />
        <Atrakcja
          url="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover/ob/16871172-i-miejsce-off-piotrkowska.jpeg"
          title="Piotrkowska offstreet"
          content="Example content"
          href="https://pl.tripadvisor.com/Attraction_Review-g274837-d12926607-Reviews-OFF_Piotrkowska-Lodz_Lodz_Province_Central_Poland.html"
        />
        <Atrakcja
          url="https://www.poland.travel/images/en-EN/cities/%C5%81%C3%B3d%C5%BA/Manufaktura-pelen.jpg"
          title="Manufaktura"
          content="Example content"
          href="https://www.manufaktura.com/site/490/zwiedzanie"
        />
        <Atrakcja
          url="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover/ob/16871172-i-miejsce-off-piotrkowska.jpeg"
          title="Piotrkowska offstreet"
          content="Example content"
          href="https://pl.tripadvisor.com/Attraction_Review-g274837-d12926607-Reviews-OFF_Piotrkowska-Lodz_Lodz_Province_Central_Poland.html"
        />
        <Atrakcja
          url="https://www.poland.travel/images/en-EN/cities/%C5%81%C3%B3d%C5%BA/Manufaktura-pelen.jpg"
          title="Manufaktura"
          content="Example content"
          href="https://www.manufaktura.com/site/490/zwiedzanie"
        />
      </Row>
    </div>
  );
}
