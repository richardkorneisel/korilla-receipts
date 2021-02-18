import React, { Component } from 'react';
import './App.css';
import Receipt from '.Receipt'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = receipt1;
  }
  // const receipt1 ={
  //   person: "Karolin",
  //   order: {
  //     main: "Burrito",
  //     protein: "Organic Tofu",
  //     rice: "Purple Rice",
  //     sauce: "Green Crack",
  //     toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
  //     drink: "Korchata",
  //     cost: 22
  //   },
  //   paid: false
  // };
  render () {
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
        <Receipt/>
      </div>
    )
  }
}

export default App;
