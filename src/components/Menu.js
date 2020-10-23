//structure to actaully create the menu

import React, { Component } from 'react'
import Axios from 'axios';
// import {Accordion, Card, Button} from 'react-bootstrap';
import Header from './Header';
// import Footer from './Footer';

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            menuUrl: ""
        }
    }

    componentDidMount() {
        Axios.get("https://entree-f18.herokuapp.com/v1/menu")
            .then(response => {
                // const self = this
                console.log(response);
                this.setState({ menuURL: response.data })
                this.setState({ menuList: response.data.menu_items })
                console.log(this.state.menuURL)

            });
    }
    render() {
        return (
            <div>
                <h2>
                    this is the sub header
              </h2>
                {this.state.menuList.map(menuList =>
                    <div>
                        <ul key={this.index}>
                            {menuList.description.split(' with ')[0]} ${(menuList.description.length)}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

}

export default Menu