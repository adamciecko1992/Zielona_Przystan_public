import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import classes from "./Contact.module.scss";
import useToTop from "../../../hooks/useToTop";


const Contact = ({ content }) => {
  useToTop();
  return (

    <div className={classes.Contact}>
      <h1 className={classes.Contact__Header}>{content.header}</h1>
      <h3 className={classes.Contact__SubHeader}>
        {content.subheader}
      </h3>
      <div className={classes.Contact__Grid}>
        <article className={classes.Contact__Grid__Article}>
          <h1>{content.info.name}</h1>
          <p>{content.info.street}</p>
          <p>{content.info.email}</p>
          <p>{content.info.phoneNumber}</p>
        </article>
        <aside className={classes.Contact__Grid__Aside}>
          <ContactForm content={content.form} />
        </aside>
      </div>
    </div>

  );
};

export default Contact;
