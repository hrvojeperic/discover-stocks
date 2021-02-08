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
        document.body.style = 'background: #3b3f47;';
        this.generateRandomStock();
    }

    _generateRandomStock = (symbol) => {
        this.setState({
            ticker: symbol
        });
        this.setState({binanceUrl: 'https://www.binance.com/en/trade/' + this.state.ticker});
        //this.generateLogo();
        //this.generateCompanyInfo();
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
                
                <div><a className="githubLink" target="_blank" rel="noopener noreferrer" href={'https://github.com/hrvojeperic'}>github.com/hrvojeperic</a></div>
                <div className="stockBox">
                    
                    <div>
                        <h1>Crypto Ticker</h1>
                    </div>  
                    

                    <div className="line"></div>

                    <div>
                        <h2>{this.state.ticker}</h2>
                        <div>
                            <a  className="binanceLink" target="_blank" rel="noopener noreferrer" href={this.state.binanceUrl}>Binance</a>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div>
                        <button className="stockButton" onClick={() => this.generateRandomStock()}>Discover Stock</button>
                    </div>

                </div>
            </div>
        )
    }


}


export default DiscoverStocks;