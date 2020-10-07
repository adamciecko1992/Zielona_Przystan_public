import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Switch, Route } from "react-router";
import Home from "../../components/Pages/Home/Home";
import About from "../../components/Pages/About/About";
import Entry from "../../components/Pages/Entry/Entry";
import Gallery from "../../components/Pages/Gallery/Gallery";
import Kontakt from "../../components/Pages/Contact/Contact";
import Attractions from "../../components/Pages/Attractions/Attractions";
import Location from "../../components/Pages/Location/Location";

export default function Layout({ setCurrentLanguage, content }) {
  return (
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />
      <Switch>
        <Route exact path="/">
          <Home content={content.home} />
        </Route>
        <Route exact path="/about">
          <About content={content.about} />
        </Route>
        <Route exact path="/entry">
          <Entry content={content.entry} />
        </Route>
        <Route exact path="/location">
          <Location content={content.location} />
        </Route>
        <Route exact path="/gallery">
          <Gallery content={content.gallery} />
        </Route>
        <Route exact path="/contact">
          <Kontakt content={content.contact} />
        </Route>
        {/* <Route exact path="/atractions">
          <Attractions content={content} />
        </Route> */}
      </Switch>
      <Footer content={content.footer} />
    </>
  );
}
