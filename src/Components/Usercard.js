import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Usercard = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="usercard-container"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Card className={showDetails ? "card-hover" : "card-default"}>
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
          <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} />
        )}
        {showDetails && (
          <Card.Body>
            <Card.Title className="title">{book.volumeInfo.title}</Card.Title>
            <Card.Text className="description">
              {book.volumeInfo.description}
            </Card.Text>
          </Card.Body>
        )}
      </Card>
    </div>
  );
};

export default Usercard;
