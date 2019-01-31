import uniqueId from "lodash/uniqueId";
import React, { Fragment } from "react";
import Sortable from "react-sortablejs";
import { Container, Row, Col } from "react-bootstrap";

// Functional Component
const SharedGroup = ({ items }) => {
  items = items.map(val => (
    <Col
      lg="2"
      key={uniqueId()}
      data-id={val}
      style={{ border: "1px solid", margin: "20px", height: "100px" }}
    >
      {val}
    </Col>
  ));

  return (
    <Sortable
      // See all Sortable options at https://github.com/RubaXa/Sortable#options
      options={{
        group: "shared",
        animation: 300,
        easing: "cubic-bezier(1, 0, 0, 1)",
        onEnd: function(/**Event*/ evt) {
          console.log("EVT", evt);
          console.log("END", evt.item);
          console.log("TO", evt.to);
          console.log("OLDINDEX", evt.oldIndex);
          console.log("NEWINDEX", evt.newIndex);
        }
      }}
      tag={Row}
    >
      {items}
    </Sortable>
  );
};

export default SharedGroup;
