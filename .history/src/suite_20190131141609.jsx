import uniqueId from "lodash/uniqueId";
import React, { Fragment } from "react";
import Sortable from "react-sortablejs";
import { Container, Row, Col } from "react-bootstrap";

// Functional Component
const Suite = ({ children, id }) => {
  //   items = items.map(val => (
  //     <Col
  //       lg="12"
  //       key={uniqueId()}
  //       data-id={val}
  //       style={{ border: "3px solid", backgrounColor: "beige" }}
  //     >
  //       {val}
  //     </Col>
  //   ));

  return (
    <Sortable
      // See all Sortable options at https://github.com/RubaXa/Sortable#options
      options={{
        group: "suite",
        animation: 300,
        easing: "cubic-bezier(1, 0, 0, 1)",
        onEnd: function(/**Event*/ evt) {
          console.log("EVT", evt);
          console.log("END", evt.item);
          console.log("TO", evt.to);
          console.log("OLDINDEX", evt.oldIndex);
          console.log("NEWINDEX", evt.newIndex);
        },
        get: function(sortable) {
          var order = localStorage.getItem(sortable.options.group.name);
          return order ? order.split("|") : [];
        },

        /**
         * Save the order of elements. Called onEnd (when the item is dropped).
         * @param {Sortable}  sortable
         */
        set: function(sortable) {
          var order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, order.join("|"));
        }
      }}
      tag={Row}
    >
      <Col
        lg="12"
        key={uniqueId()}
        data-id={id}
        style={{
          border: "3px solid",
          backgroundColor: "#f0f0f0",
          marginBottom: "10px"
        }}
      >
        <h2>Suite</h2>
        {children}
      </Col>
    </Sortable>
  );
};

export default Suite;
