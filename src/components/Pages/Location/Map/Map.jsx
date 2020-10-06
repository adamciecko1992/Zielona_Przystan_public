import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import classes from "./Map.module.scss";

export class MapContainer extends Component {
  render() {
    const MapContainerStyle = {
      height: "80vh",
      width: "110%",
      display: "block",
      left: "40%",
      top: "50%",
      bottom: "10%",
      transform: "translate(-55%,20%)",
      boxShadow: "0px 1px 15px black",
    };
    const { location } = this.props;
    return (
      <div className={classes.mapContainer}>
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: location.initLat,
            lng: location.initLng,
          }}
          center={{
            lat: location.initLat,
            lng: location.initLng,
          }}
          containerStyle={MapContainerStyle}
        >
          <Marker
            title={"Zielona przystań"}
            name={"Zielona Przystań"}
            position={{ lat: 51.769195, lng: 19.456278 }}
          />
          <Marker
            title={"Parking bezpłatny przy ulicy Sienkiewicza 5"}
            name={"Parking bezpłatny przy ulicy Sienkiewicza 5"}
            position={{ lat: 51.7701503, lng: 19.4593799 }}
          />
          <Marker
            title={"Parking płatny przy uliy Narutowicza"}
            name={"Parking płatny przy uliy Narutowicza"}
            position={{ lat: 51.7705207, lng: 19.4574808 }}
          />
          <Marker
            title={"Parking bezpłatny przy ulicy Sienkiewicza 5"}
            name={"Parking bezpłatny przy ulicy Sienkiewicza 5"}
            position={{ lat: 51.7701503, lng: 19.4593799 }}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "api key", //not availabel in git repo
})(MapContainer);
