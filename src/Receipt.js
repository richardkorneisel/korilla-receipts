import React, { Component } from 'react';
import './Receipt.css';

class Receipt extends React.Component {
    constructor(props){
        super(props)
    }
    //render static first to see if shows up on page
    render(){
        console.log(this.props.receipt)
        return(
            <div className="receipt">
                <h3>{this.props.receipt.person}</h3>
                <p><span>Main:</span> {this.props.receipt.order.main}</p>
                <p><span>Protein:</span> {this.props.receipt.order.protein}</p>
                <p><span>Rice:</span> {this.props.receipt.order.rice}</p>
                <p><span>Sauce:</span> {this.props.receipt.order.sauce}</p>
                <p><span>Drink:</span> {this.props.receipt.order.drink}</p>
                <p><span>Cost:</span> {this.props.receipt.order.cost}</p>
            </div>
        )
    }
}

export default Receipt;