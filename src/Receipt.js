import React from 'react';
import './Receipt.css';

class Receipt extends React.Component {
    constructor(props) {
        super(props)
    } 
    render() {
        const allToppings = this.props.receipt.order.toppings.map((topping, index) => {
            return <p key={index}>
                {topping}
            </p>
        })
        console.log(this.props.receipt)
        return (
            <div className="receipt">
                <h3>{this.props.receipt.person}</h3>
                <strong><p><span>main</span>: {this.props.receipt.order.main}</p></strong>
                <strong><p><span>protein</span>: {this.props.receipt.order.protein}</p></strong>
                <strong><p><span>rice</span>: {this.props.receipt.order.rice}</p></strong>
                <strong><p><span>sauce</span>: {this.props.receipt.order.sauce}</p></strong>
                <strong><p><span>drink</span>: {this.props.receipt.order.drink}</p></strong>
                <strong><p><span>cost</span>: {this.props.receipt.order.cost}</p></strong>                <h4>Toppings</h4>
                {allToppings}
            </div>
        )
    }
} 
export default Receipt