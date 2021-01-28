import React, { Component } from 'react';
import stock from '../resources/stock';

/*

    Discover Stock
    Logo Ticker
    Name
    stock price
    more information
    

*/

class DiscoverStocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            ticker: '',
            logo: '',
            exchange: '',
            website: '',
            tags: [],
            stockPrice: '',
            priceDate: ''
        }
    }

    updateStockData = () => {
        
    }

    _generateRandomStock = (symbol) => {
        this.setState({
            ticker: symbol
        });
        this.generateLogo();
        this.generateCompanyInfo();
        this.generateStockPrice();
    }

    generateRandomStock = () => {
        stock.getSymbol(this._generateRandomStock);
    }

    _generateLogo = (logoUrl) => {
        this.setState({
            logo: logoUrl
        });
    }

    generateLogo = () => {
        stock.getLogo(this.state.ticker, this._generateLogo);
    }

    _generateCompanyInfo = (name, exchange, website, tags) => {
        this.setState({
            companyName: name,
            exchange: exchange,
            website: website,
            tags: tags
        });
    }

    generateCompanyInfo = () => {
        stock.getCompanyInfo(this.state.ticker, this._generateCompanyInfo);
    }

    _generateStockPrice = (price, date) => {
        this.setState({
            stockPrice: price,
            priceDate: date
        });
    }

    generateStockPrice = () => {
        stock.getPrice(this.state.ticker, this._generateStockPrice);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.generateRandomStock()}>Discover Stock</button>
                <img src={this.state.logo} width="200" height="200"></img>
                <h1>Company Name: </h1>
                <h3>{this.state.companyName}</h3>
                <h1>Ticker: </h1>
                <h3>{this.state.ticker}</h3>
                <h1>Exchange: </h1>
                <h3>{this.state.exchange}</h3>
                <h1>Price and Date </h1>
                <h3>{this.state.stockPrice}     {this.state.priceDate}</h3>
                <h1>Website: </h1>
                <a href={this.state.website}>{this.state.website}</a>
                <h1>Tags: </h1>
                <h3>{this.state.tags}</h3>

            </div>
        )
    }


}


export default DiscoverStocks;