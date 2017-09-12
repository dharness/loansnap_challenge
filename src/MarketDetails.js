import React, { Component } from 'react'
import { getMarketDetails } from './apiService'

class MarketDetails extends Component {

  render () {
    return (
      <div>
        Bid: {this.props.Bid}<br />
        Ask: {this.props.Ask}<br />
        Last: {this.props.Last}<br />
      </div>
    )
  }
}

export default MarketDetails