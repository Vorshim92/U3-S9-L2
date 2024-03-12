import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";

const allGenres = [romance, fantasy, horror, history, scifi];
console.log(allGenres);
function generateCard() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="my-3 text-center">Ecco i nostri Libri!!</h2>
          {allGenres[0].map((book, i) => {
            if (i < 10) {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            }
            return null;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default generateCard;
