import React, { useState } from "react";
import classes from "./Location.module.scss";
import useToTop from "../../../hooks/useToTop";
import Map from "./Map/Map";
import MapControl from "./MapControl/MapControl";
import { Container } from "react-bootstrap"

export default function Location({ content }) {
  const [location, setLocation] = useState({
    initLat: 51.769195,
    initLng: 19.456278,
    name: 'home'
  })
  const goTo = (lat, lng, name) => {
    setLocation({ initLat: lat, initLng: lng, name: name });
  };
  const currentText = () => {
    if (location.name === 'home') {
      return content.points.home
    }
    if (location.name === 'parking1') {
      return content.points.parking1
    }
    if (location.name === 'parking2') {
      return content.points.parking2
    }
  }
  useToTop();
  return (
    <Container fluid className={classes.Location}>

      <div className={classes.Location__Grid}>

        <article className={classes.Location__Grid__Article}>
          <h1 className={classes.Location__Header}>{content.header}</h1>
          <h4 className={classes.Location__Subheader}>{content.subheader}</h4>
          <MapControl goTo={goTo} content={content.controls} />
          <p className={classes.Location__Grid__Article__Text}>{currentText()}</p>
        </article>
        <aside className={classes.Location__Grid__Aside}>

          <Map location={location} />
        </aside>
      </div>
    </Container>
  );
}
