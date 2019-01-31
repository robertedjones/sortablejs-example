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
            <Suite>
              <SharedGroup items={["Apple", "Banaba", "Cherry", "Grape"]} />
            </Suite>
            <Suite>
              <SharedGroup
                items={[
                  "Lemon",
                  "Orange",
                  "Pear",
                  "Peach",
                  "blue",
                  "red",
                  "orange",
                  "purple"
                ]}
              />
            </Suite>
          </Col>
          <Col lg="6">
            <div style={{ border: "1px solid green" }}>
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
