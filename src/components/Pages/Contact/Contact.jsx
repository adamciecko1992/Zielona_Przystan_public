import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import classes from "./Contact.module.scss";
import useToTop from "../../../hooks/useToTop";


const Contact = (props) => {
  useToTop();
  return (

    <div className={classes.Contact}>
      <h1 className={classes.Contact__Header}>Kontakt</h1>
      <h3 className={classes.Contact__SubHeader}>
        Jeśli nie znalazłeś odpowiedzi na swoje pytania na naszej stronie,
        skontaktuj się z nami !
      </h3>
      <div className={classes.Contact__Grid}>
        <article className={classes.Contact__Grid__Article}>
          <h1>Zielona przystań</h1>
          <p>ul.Piotrksowska 59 Łódź</p>
          <p>hanna.ciecko@gmail.com</p>
          <p>tel.531-065-117</p>
        </article>
        <aside className={classes.Contact__Grid__Aside}>
          <ContactForm content={props.content} />
        </aside>
      </div>
    </div>

  );
};

export default Contact;
