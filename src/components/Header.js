import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignupForm from "./SignupForm";
import "../styles/header.css";

export default function Header() {
  return (
    <Row className="header-container justify-content-center">
      {/* <img
        src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg"
        alt=""
      /> */}
      <Col xl={6}>
        <h1>Generate more leads with a professional landing page!</h1>
        <SignupForm />
      </Col>
    </Row>
  );
}
