import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SharedGroup from "./shared-group";
import Benefits from "./benefits";
import { Container, Row, Col } from "react-bootstrap";
import Suite from "./suite";

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <Container>
        <Row>
          <Col lg="6">
            <Suite id="SUITE1">
              <SharedGroup items={["Add"]} />
            </Suite>
            <Suite id="SUITE2">
              <SharedGroup items={["Add"]} />
            </Suite>
          </Col>
          <Col lg="6">
            <div style={{ border: "1px solid #ff0000" }}>
              <Benefits
                items={[
                  "Benfit 1",
                  "Benefit 2",
                  "Benefit 3",
                  "Benefit 4",
                  "Benefit 5",
                  "Benefit 6",
                  "Benefit 7"
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
