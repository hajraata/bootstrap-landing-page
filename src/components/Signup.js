import React from "react";
import SignupForm from "./SignupForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/signup.css";

export default function Signup() {
  return (
    <Row className="signup-container justify-content-center">
      <Col xl={6}>
        <h2>Ready To Get Started? Sign Up Now!</h2>
        <SignupForm />
      </Col>
    </Row>
  );
}
