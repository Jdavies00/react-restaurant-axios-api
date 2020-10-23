// import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import React, { Component } from 'react'
import Appetizers from './components/Appetizers';

export default class App extends Component {
  render() {
    return (
      <div className= "accordButton">
        <Header />
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header >
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
               Appetizers 
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Appetizers /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    {/* accordian2 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Entree
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      {/* accordian 3 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      {/* accordian 4 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        {/* accordian 5 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Click me!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
     
    )
  }
}

