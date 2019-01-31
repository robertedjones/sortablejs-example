import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SortableList from "./sortable-list";
import SharedGroup from "./shared-group";

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6]
  };
  render() {
    return (
      <div>
        <SharedGroup items={["Apple", "Banaba", "Cherry", "Grape"]} />
        <br />
        <SharedGroup items={["Lemon", "Orange", "Pear", "Peach"]} />
      </div>
    );
  }
}

export default App;
