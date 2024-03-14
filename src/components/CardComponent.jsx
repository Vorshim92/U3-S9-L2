import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import GenerateCard from "./SingleBookComponent";
import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";
import GenerateCards from "./BooklistComponent";

const allGenres = [romance, fantasy, horror, history, scifi];
console.log(allGenres);

function DropdownList() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedButton, setSelectedButton] = useState("Seleziona una Categoria");

  function handleItemClick(index) {
    setSelectedGenre(index);
    setSelectedBook(null);
  }

  function handleBookClick(book) {
    setSelectedBook(book);
  }
  const handleChange = (event) => {
    setSelectedButton(event.target.innerText);
  };

  return (
    <>
      {selectedBook !== null && <GenerateCard asin={selectedBook} genre={selectedGenre} />}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedButton}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(0);
              handleChange(e);
            }}
          >
            Romance
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(1);
              handleChange(e);
            }}
          >
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(2);
              handleChange(e);
            }}
          >
            Horror
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(3);
              handleChange(e);
            }}
          >
            History
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(4);
              handleChange(e);
            }}
          >
            Sci-fi
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Container fluid>
        <Row className="justify-content-center gap-3">{selectedGenre !== null && <GenerateCards selectedGenre={selectedGenre} onBookClick={handleBookClick} />}</Row>
      </Container>
    </>
  );
}

export { allGenres };
export default DropdownList;
