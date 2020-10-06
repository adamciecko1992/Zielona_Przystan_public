import React, { Component } from "react";
import classes from "./ContactForm.module.scss";
import validators from "../../../../helpers/validators";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";

export default class ContactForm extends Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
      name: "",
      email: "",
      send: false,
      errors: false,
      errorsMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    emailjs.init("user_k9SKpA2hZLsFeeOThMknf");
  }

  validate = (name, email, content) => {
    const { isEmail, minLength, maxLength, noHarmfulSymbols } = validators;
    const propperEmail = isEmail(email) && minLength(email);
    const propperName = minLength(name) && maxLength(name) && noHarmfulSymbols(name);
    const propperContent = noHarmfulSymbols(content) && minLength(content);

    this.setState({ errorsMessage: "" });

    if (!propperEmail) {
      this.setState((st) => ({
        errorsMessage:
          st.errorsMessage + "Proszę wprowadzić poprawny adres email<br/>",
      }));
    }
    if (!propperName) {
      this.setState((st) => ({
        errorsMessage:
          st.errorsMessage + "Proszę wprowadzić poprawne imię<br/>",
      }));
    }
    if (!propperContent) {
      this.setState((st) => ({
        errorsMessage:
          st.errorsMessage +
          "Tekst zawiera niedozwolone znaki specjalne np $ % ^ < > itd. lub jest zbyt krótka<br/>",
      }));
    }

    return propperContent && propperEmail && propperName;
  };
  errors = "";
  handleSubmit(e) {
    e.preventDefault();
    const { content, name, email } = this.state;
    console.log(name);
    const valid = this.validate(name, email, content);

    if (valid) {
      emailjs.send(
        "adam_ciecko_gitara_gmail_com",
        "zielona_przystan",
        this.state,
        "user_k9SKpA2hZLsFeeOThMknf"
      );

      this.setState((st) => ({ send: !st.send, errors: false }));
    } else {
      this.setState({ errors: true });
    }
  }
  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className={`mt-2 shadow p-3 col-lg-10 col-xs-12 mx-auto border ${classes.Form}`}
      >
        <Form.Group controlId="formBasicName">
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type="text"
            placeholder="Twoje imię"
            onChange={(e) => this.handleChange(e, "name")}
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Twój adres email"
            onChange={(e) => this.handleChange(e, "email")}
            value={this.state.email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Treść zapytania"
            as="textarea"
            rows={6}
            onChange={(e) => this.handleChange(e, "content")}
            value={this.state.content}
          />
        </Form.Group>
        {this.state.errors && (
          <p
            className="text-danger blockquote"
            dangerouslySetInnerHTML={{ __html: this.state.errorsMessage }}
          ></p>
        )}
        <Button type="submit" className="mb-2">
          Wyślij
        </Button>
        {this.state.send ? (
          <Animated
            animationIn="bounce"
            animationOut="fadeOut"
            animateOnMount={true}
          >
            <p className="text-dark mt-5 font-weight-bold text-primary">
              Wiadomość wysłana
            </p>
          </Animated>
        ) : (
            ""
          )}
      </Form>
    );
  }
}
