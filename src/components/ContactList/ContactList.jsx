import React from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        <Contact contacts={contacts} />
      </ul>
    </div>
  );
};
