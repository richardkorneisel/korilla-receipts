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
            <ul className="receipt">
                <li><span>Person:</span> {this.props.receipt.person}</li>
                <li><span>Order</span></li>
                <li><span>Main:</span> {this.props.receipt.order.main}</li>
                <li><span>Protein:</span> {this.props.receipt.order.protein}</li>
                <li><span>Rice:</span> {this.props.receipt.order.rice}</li>
                <li><span>Sauce:</span> {this.props.receipt.order.sauce}</li>
                <li><span>Drink:</span> {this.props.receipt.order.drink}</li>
                <li><span>Cost:</span> {this.props.receipt.order.cost}</li>
            </ul>
        )
    }
}


// function Receipt (props) {
// return (
//     <div className="Receipt">
//         <div>
//             <li><span>Person</span>{this.state.person}​​</li>
//                 <ul>
//                     <li><span>Main</span>{this.state.order.main}​​</li>
//                     <li><span>Protein</span>{this.state.order.protein}​​</li>
//                     <li><span>Rice</span>{this.state.order.rice}​​</li>
//                     <li><span>Sauce</span>{this.state.order.sauce}​​</li>
//                     <li><span>Drink</span>{this.state.order.drink}​​</li>
//                     <li><span>Order</span>{this.state.order.cost}​​</li>
//                 </ul>
//         </div>
//     </div>
//     )
// }

export default Receipt;