import React, { Component } from 'react';
import stock from '../resources/stock';
import BINANCE from '../resources/binance';
import '../styles/stockStyles.css';

// main component for displaying stocks
class DiscoverStocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticker: '',
            binanceUrl: '',
            tickerArray: []
            //stockPrice: ''
        }
    }

    // set up page when component is rendered in
    componentDidMount() {
        // set tab title and page color
        document.title = "Discover Stocks";
        document.body.style = 'background: #3b3f47;';
        // generate stock from api
        this.generateRandomStock();
    }

    // returns random integer bounded by upper limit
    randomInteger = (upperLimit) => {
        return Math.floor(Math.random() * upperLimit);
    }

    // generate random stock after 429 error code
    errorCallback = () => {
        // generate stock from api
        this.generateRandomStock();
    }

    _generateRandomStock = (symbolArr) => {
        const randNum = this.randomInteger(symbolArr.length);
        const newTicker = symbolArr[randNum].symbol;
        this.setState({
            tickerArray: symbolArr,
            ticker: newTicker,
            binanceUrl: BINANCE.baseUrl + newTicker
        });
        // this.generateStockPrice(); // api data not loading
    }

    // requests data from api to generate new stock
    generateRandomStock = () => {
        stock.getSymbol(this._generateRandomStock, this.errorCallback);
    }

    // generate new stock after first api request
    newStock = () => {
        const randNum = this.randomInteger(this.state.tickerArray.length);
        const newTicker = this.state.tickerArray[randNum].symbol;
        this.setState({
            ticker: newTicker,
            binanceUrl: BINANCE.baseUrl + newTicker
        });
    }

    /*
    // api data not loading
    _generateStockPrice = (price) => {
        this.setState({
            stockPrice: price
        });
    }

    generateStockPrice = () => {
        stock.getPrice(this.state.ticker, this._generateStockPrice);
    }
    */

    render() {
        return (
            <div>
                <div>
                    <a className="githubLink" target="_blank" rel="noopener noreferrer" href={'https://github.com/hrvojeperic'}>github.com/hrvojeperic</a>
                </div>
                <div className="stockBox">
                    <div className="topBox">
                        <h1 className="title">Crypto Ticker</h1>
                    </div>
                    <div className="middleBox" onClick={()=> window.open(this.state.binanceUrl, "_blank")}>
                        <h2 className="tickerName">{this.state.ticker}</h2>
                    </div>
                    <div className="bottomBox" onClick={() => this.newStock()}>
                        <h3 className="buttonName">Generate</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default DiscoverStocks;