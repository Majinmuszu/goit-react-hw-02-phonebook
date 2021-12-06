import React from "react";

export const Filter = ({ filter }) => {
  return (
    <div>
      <label>
        Find contacts by name =&gt;
        <input onChange={filter} type="text"></input>
      </label>
    </div>
  );
};
