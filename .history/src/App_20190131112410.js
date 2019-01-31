import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortableList from "./sortable-list";
import SharedGroup from "./shared-group";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SharedGroup items={["Apple", "Banaba", "Cherry", "Grape"]} />
          </Col>
          <Col>
            <SharedGroup items={["Lemon", "Orange", "Pear", "Peach"]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
