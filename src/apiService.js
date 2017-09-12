import axios from 'axios';
import getmarkets from './data/getmarkets'
import getticker from './data/getticker'
const API_URL = 'https://bittrex.com/api/v1.1/public'


export const getMarkets = () => {
  return getmarkets.result;
}

export const getMarketDetails = (marketName) => {
  return (getticker[marketName] || {
    Bid: '',
    Ask: '',
    Last: ''
  }).result
}