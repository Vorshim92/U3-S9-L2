import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { allGenres } from "./CardComponent";

function GenerateCards({ selectedGenre, onBookClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h2 className="my-3 text-center">Ecco i nostri Libri {allGenres[selectedGenre][0].category}!!</h2>
      <input type="text" placeholder="Cerca per titolo..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {allGenres[selectedGenre]
        .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 10)
        .map((book, i) => (
          <Col xs={2} key={book.asin}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
              <Card.Body>
                <Card.Title style={{ height: "100px" }}>{book.title}</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <small className="">{book.category}</small>
                <Button variant="primary" onClick={() => onBookClick(book.asin)}>
                  VISUALIZZA
                </Button>
                <small className="">{book.price}€</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
}
export default GenerateCards;
