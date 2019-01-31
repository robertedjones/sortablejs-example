import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortableList from "./sortable-list";

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <SortableList
        items={this.state.items}
        onChange={items => {
          this.setState({ items });
        }}
      />
    );
  }
}

export default App;
