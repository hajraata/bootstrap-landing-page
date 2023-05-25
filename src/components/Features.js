import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/features.css";

export default function Features({ items }) {
  return (
    <Row
      className="justify-content-evenly align-content-center features-row"
      style={{ height: "80vh" }}
    >
      {items.map((item) => (
        <Col key={item.id} className="text-center" xl={3}>
          <i className={item.icon}></i>
          <h4 className="mt-4">{item.title}</h4>
          <p>{item.description}</p>
        </Col>
      ))}
    </Row>
  );
}
