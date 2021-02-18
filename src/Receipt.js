import React, { Component } from 'react';
import './Receipt.css';

class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = receipt1;
        console.log(this.state.person);
    }

render() {
    return (
        <div>
            <div>
                Person: {this.state.person}​​ <br />
                Order:
                    <ul>
                        <li>{this.state.order.main}​​</li>
                        <li>{this.state.order.protein}​​</li>
                        <li>{this.state.order.rice}​​</li>
                        <li>{this.state.order.sauce}​​</li>
                        <li>{this.state.order.drink}​​</li>
                        <li>{this.state.order.cost}​​</li>
                    </ul>

            </div>
        </div>

        )
    }
}​​

export default Receipt;