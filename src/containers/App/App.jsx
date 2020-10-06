import React, { useState, useEffect } from "react";

import Layout from "../../containers/Layout/Layout";
import textContent from "../../content/content";

import { Container } from "react-bootstrap";
import styles from "./App.module.scss";

function App() {
  //state
  const [currentLanguage, setCurrentLanguage] = useState("pl");
  const [currentContent, setContent] = useState(textContent.pl);

  //dynamic styles

  useEffect(() => {
    if (currentLanguage === "pl") {
      setContent(textContent.pl);
    }
    if (currentLanguage === "eng") {
      setContent(textContent.eng);
    }
  }, [currentLanguage]);

  return (
    <Container fluid className={`${styles.App} position-relative p-0 m-0`}>
      <Layout
        content={currentContent}
        setCurrentLanguage={setCurrentLanguage}
      />
    </Container>
  );
}

export default App;
