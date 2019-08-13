import React, { useState, Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";

export const Main = () => {

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to React - now with Hooks!!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}