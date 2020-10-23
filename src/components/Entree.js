import React, { Component } from 'react';
import Axios from 'axios';

export default class Entree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: {},
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
                    this is the sub header
              </h2>
                {this.state.menuList.map(menuList =>
                    <div className="">
                        <ul key={this.index}>
                            {menuList.description.split(' with ')[0]} ${(menuList.description.length)}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
