import React, { Component } from 'react';
import stock from '../resources/stock';
import '../styles/stockStyles.css';
/*

    Ticker
    LINK
    

*/

class DiscoverStocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticker: '',
            stockPrice: '',
            binanceUrl: ''
        }
    }

    componentDidMount() {
        document.title = "Discover Stocks"; // set tab title
        document.body.style = 'background: #3b3f47;';
        this.generateRandomStock();
    }

    _generateRandomStock = (symbol) => {
        this.setState({
            ticker: symbol
        });
        this.setState({binanceUrl: 'https://www.binance.com/en/trade/' + this.state.ticker});
        this.generateStockPrice();
    }

    generateRandomStock = () => {
        stock.getSymbol(this._generateRandomStock);
    }

    _generateStockPrice = (price) => {
        this.setState({
            stockPrice: price
        });
    }

    generateStockPrice = () => {
        stock.getPrice(this.state.ticker, this._generateStockPrice);
    }

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
                    <div  className="bottomBox" onClick={() => this.generateRandomStock()}>
                        <h3 className="buttonName">Generate</h3>
                    </div>
                </div>
            </div>
        )
    }


}


export default DiscoverStocks;