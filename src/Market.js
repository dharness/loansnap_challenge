import React, { Component } from 'react'
import { getMarkets } from './apiService';


const MarketPreview = (props) => {
  return (
    <div
      style={{border: 'solid 1px black'}}
      onClick={()=> {
        console.log('oko')
        props.onMarketSelected(props.MarketName)
        }}
    >
      <h5>{props.MarketName}</h5>
      <div>From: {props.BaseCurrency}</div>
      <div>To: {props.MarketCurrencyLong}</div>
    </div>
  )
}

class Market extends Component {
  constructor() {
    super();
    this.state = { markets: [] };
  }
  componentDidMount() {
    const marketData = getMarkets();
    this.setState({
      markets: marketData
    })
  }

  render () {
    return (
      <div>
        <h1>Markets</h1>
        {this.state.markets.map((market, i) => {
          return (<MarketPreview
            onMarketSelected={this.props.onMarketSelected}
            key={i}
            MarketName={market.MarketName}
            BaseCurrency={market.BaseCurrencyLong}
            MarketCurrencyLong={market.MarketCurrencyLong}
            />)
        })}
      </div>
    )
  }
}

export default Market