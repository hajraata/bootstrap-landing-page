import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/reviews.css";

export default function Reviews({ items }) {
  return (
    <Row className="reviews-row justify-content-center text-center">
      <Row
        className="justify-content-evenly align-items-center"
        style={{ padding: "5rem 0rem" }}
      >
        <Row className="justify-content-center">
          <Col lg xl={4}>
            <h3>What People Are Saying...</h3>
          </Col>
        </Row>
        {items.map((item) => (
          <Col key={item.id} lg xl={3} className="justify-content-center mt-5">
            <Image
              roundedCircle
              src={item.image}
              alt="person"
              height={"200rem"}
              width={"200rem"}
              style={{ objectFit: "cover", boxShadow: "2px 2px 20px grey" }}
            />
            <h4 style={{ marginTop: "5vh" }}>{item.name}</h4>
            <p style={{ marginTop: "5vh" }}>{item.review}</p>
          </Col>
        ))}
      </Row>
    </Row>
  );
}
