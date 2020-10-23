import React, { Component } from 'react'
// import { Accordion, Card, Button } from 'react-bootstrap';
import Axios from 'axios';



export default class Appetizers extends Component {
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
                const self = this
                console.log(response);
                self.setState({ menuURL: response.data })
                self.setState({ menuList: response.data.menu_items })
                console.log(self.state.menuURL)

            });
    }
    render() {
        return (
            <div>
            <h2>
            
              </h2>
                {this.state.menuList.map(menuList =>
                    <div>
                        <ul key={this.index}>
                        <hr></hr>
                            <div className="liTitle">{menuList.description.split(' with ')[0]}</div>
                            <div className="liDescription">with{menuList.description.split('with')[1]}</div>
                            <div className="liPrice">${(menuList.description.length)}</div>
                        
                        </ul>

                    </div>
                )}
            </div>
        );
    }
}
