// import React from 'react';
import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { Accordion, Card, Button, Container} from 'react-bootstrap';
import Appetizers from './components/Appetizers';
import Specials from './components/specials';
import Entree from './components/Entree';
import Latenight from './components/latenight';
import Footer from './components/Footer';
import Brunch from './components/brunch'

export default class App extends Component {
  render() {
    return (
      <div className= "accordButton">
        <Header />
        <Container>
        <Accordion defaultActiveKey="1">
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
              <Card.Body><Entree /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      {/* accordian 3 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Brunch
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body><Brunch /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      {/* accordian 4 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Specials
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body><Specials /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        {/* accordian 5 */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Late Night
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body><Latenight /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div>
        </div>
        </Container>
        <Footer />
      </div>
     
    )
  }
}

