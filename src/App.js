import React, { useState, useEffect } from "react";
import axios from "axios";
import Userbook from "./Components/Userbook.js";
import "./App.css";
import captureImage1 from "./images/IMG.png";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getBooks = async (term) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}`
      );
      setBooks(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      getBooks("");
    } else {
      getBooks(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    getBooks(searchTerm.trim());
  };

  return (
    <div className="App">
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <img src={captureImage1} alt="book" />
        </div>
      </div>
      <Userbook Books={books} />
    </div>
  );
}

export default App;
