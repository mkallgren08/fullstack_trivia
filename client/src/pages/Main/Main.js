import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import {FirstHook} from "../../components/firstHook"
import {GameOptions} from "../../components/Form"
import './Main.css';

export let Main = () => {

  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    //document.title = `You clicked ${count} times`;
  });

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to React - now with Hooks!!</h1>
          </Jumbotron>
        </Col>
      </Row>
      {/* <div className="trivia-content-wrapper">
        <span className="trivia-btn__count-clicker" onClick={()=>setCount(count+1)}>
          Click me! 
          <DeleteBtn></DeleteBtn>
        </span>
          
      </div> */}
      <GameOptions></GameOptions>
      <FirstHook></FirstHook>
    </Container>
  )
}