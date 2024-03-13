import React from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <div className="container mt-4 text-white">
      <h2 className="text-center">Benvenuto nel nostro negozio!</h2>
      <Alert variant="info">Benvenuto! Siamo felici di averti qui. Dai un'occhiata ai nostri prodotti e non esitare a contattarci se hai domande.</Alert>
    </div>
  );
}

export default Welcome;
