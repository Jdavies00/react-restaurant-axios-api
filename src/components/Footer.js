import React, { Component } from 'react'
import {Navbar, Container, NavbarBrand} from 'react-bootstrap';
export default class Footer extends Component {
    render() {
        return (
            <div className="fixed-bottom">  
            <Navbar color="light" dark>
                <Container>
                    <NavbarBrand><i class="far fa-arrow-alt-circle-up"></i></NavbarBrand>
                </Container>
            </Navbar>
        </div>
    
        )
    }
}
