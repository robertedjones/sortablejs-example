import uniqueId from "lodash/uniqueId";
import React from "react";
import Sortable from "react-sortablejs";
import { Container, Row, Col } from "react-bootstrap";

// Functional Component
const SharedGroup = ({ items }) => {
  items = items.map(val => (
    <Col xs lg="2" key={uniqueId()} data-id={val} style>
      {val}
    </Col>
  ));

  return (
    <Sortable
      // See all Sortable options at https://github.com/RubaXa/Sortable#options
      options={{
        group: "shared"
      }}
    >
      {items}
    </Sortable>
  );
};

export default SharedGroup;
