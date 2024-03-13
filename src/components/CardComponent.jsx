import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import GenerateCard from "./SingleBookComponent";
import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";

const allGenres = [romance, fantasy, horror, history, scifi];
console.log(allGenres);

function DropdownList() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  function handleItemClick(index) {
    setSelectedGenre(index);
    setSelectedBook(null);
  }

  function handleBookClick(book) {
    setSelectedBook(book);
  }

  return (
    <>
      {selectedBook !== null && <GenerateCard asin={selectedBook} genre={selectedGenre} />}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Scegli il genere
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleItemClick(0)}>Romance</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(1)}>Fantasy</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(2)}>Horror</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(3)}>History</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(4)}>Sci-fi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {selectedGenre !== null && <GenerateCards selectedGenre={selectedGenre} onBookClick={handleBookClick} />}
    </>
  );
}

function GenerateCards({ selectedGenre, onBookClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container fluid>
      <Row className="justify-content-center gap-3">
        <h2 className="my-3 text-center">Ecco i nostri Libri!!</h2>
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
      </Row>
    </Container>
  );
}

export { allGenres };
export default DropdownList;
