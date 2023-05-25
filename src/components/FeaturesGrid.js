import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FeaturesGrid({ items }) {
  return (
    <>
      {items.map((item) => (
        <Row
          key={item.id}
          //   style={{ height: "90vh" }}
          className="d-flex flex-wrap text-left p-0"
        >
          <Col
            md={8}
            xl={6}
            className={`order-xl-${item.order} d-flex flex-column justify-content-center mx-auto`}
            style={{ padding: "10vh 10vw" }}
          >
            <h3>{item.title}</h3> <p>{item.description}</p>
          </Col>
          <Col
            md={12}
            xl={6}
            style={{ height: "90vh", padding: "0" }}
            className="order-sm-first"
          >
            <img
              src={item.image}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt="feature"
              className="p-0"
            />
          </Col>
        </Row>
      ))}
    </>
  );
}
