import React from "react";

export const Contact = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id} id={id}>
          {name}: {number}
        </li>
      ))}
    </>
  );
};
