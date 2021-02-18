import React, { Component } from 'react';
import './Receipt.css';

function Receipt (props) {
return (
    <div className="Receipt">
        <div>
            <li><span>Person</span>{this.state.person}​​</li>
                <ul>
                    <li><span>Main</span>{this.state.order.main}​​</li>
                    <li><span>Protein</span>{this.state.order.protein}​​</li>
                    <li><span>Rice</span>{this.state.order.rice}​​</li>
                    <li><span>Sauce</span>{this.state.order.sauce}​​</li>
                    <li><span>Drink</span>{this.state.order.drink}​​</li>
                    <li><span>Order</span>{this.state.order.cost}​​</li>
                </ul>
        </div>
    </div>
    )
}

export default Receipt;