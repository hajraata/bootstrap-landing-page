import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignupForm() {
  return (
    <Row>
      <Form className="d-flex justify-content-evenly mt-4">
        <Form.Control
          type="email"
          placeholder="Enter Email"
          style={{ width: "70%", height: "12vh" }}
          size="lg"
        ></Form.Control>
        <Button type="submit" size="lg">
          Sign Up
        </Button>
      </Form>
    </Row>
  );
}
