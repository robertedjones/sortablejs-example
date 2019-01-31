import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortableList from "./sortable-list";
import SharedGroup from "./shared-group";
import { Container, Row, Col } from "react-bootstrap";
import Suite from "./suite";

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default App;
