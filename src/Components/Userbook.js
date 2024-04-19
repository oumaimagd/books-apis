import React from "react";
import Usercard from "./Usercard";

const Userbook = ({ Books }) => {
  return (
    <div className="userbook-container">
      {Books.map((book) => (
        <Usercard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Userbook;
