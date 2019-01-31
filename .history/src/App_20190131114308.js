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
          <SharedGroup items={["Apple", "Banaba", "Cherry", "Grape"]} />
        </Row>
        <Row>
          <SharedGroup items={["Lemon", "Orange", "Pear", "Peach"]} />
        </Row>
      </Container>
    );
  }
}

export default App;
