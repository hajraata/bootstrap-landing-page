import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer({ items, icons }) {
  return (
    <Row
      className="d-flex justify-content-evenly px-md-2"
      style={{ height: "30vh" }}
    >
      <Col
        sm={12}
        md={5}
        xl={4}
        className="d-flex flex-column justify-content-center align-items-sm-center"
      >
        <ul className="d-flex list-unstyled">
          {items.map((item) => (
            <li key={item.id} className="px-2">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <p className="px-2"> © Your Website 2023. All Rights Reserved.</p>
      </Col>
      <Col
        sm={12}
        md={5}
        xl={4}
        className="d-flex justify-content-end align-items-center justify-content-sm-center"
      >
        <p>
          {icons.map((icon) => (
            <i className={icon.classes} key={icon.id}></i>
          ))}
        </p>
      </Col>
    </Row>
  );
}
