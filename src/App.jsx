import "./App.css";
import React, { Component } from "react";
// import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
  };

  addContactsToList = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    this.setState((state) => ({
      contacts: [
        ...state.contacts,
        { name: state.name, id: nanoid(), number: state.number },
      ],
    }));
    form.reset();
  };
  setContactInState = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          setContact={this.setContactInState}
          submitForm={this.addContactsToList}
        />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
