import React, { Component } from 'react';
import Market  from './Market';
import MarketDetails  from './MarketDetails';
import { getMarketDetails } from './apiService';
import './app.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Bid: '',
      Ask: '',
      Last: ''     
    }
  }

  onMarketSelected(marketName) {
    const {Bid, Ask, Last} = getMarketDetails(marketName)
    this.setState({
      Bid,
      Ask,
      Last
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-left">
          <Market onMarketSelected={this.onMarketSelected.bind(this)}/>
        </div>
        <div className="app-right">
          <MarketDetails Bid={this.state.Bid} Ask={this.state.Ask} Last={this.state.Last}/>
        </div>
      </div>
    );
  }
}

export default App;
