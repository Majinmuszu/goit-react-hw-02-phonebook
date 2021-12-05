import React from "react";

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => (
            <li key={id} id={id}>
              {name}: {number}
            </li>
        ))}
      </ul>
    </div>
  );
};
