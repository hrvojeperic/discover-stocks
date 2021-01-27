import React, { Component } from 'react';
import IEX_API from '../iex_api/iex_api';

class DiscoverStocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            companyName: '',
            ticker: ''
        }
    }

    _randomSymbolName = async () => {
        const url = `${IEX_API.baseUrl}/ref-data/symbols?token=${IEX_API.apiToken}`
        // https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_d2db7964a6dc4ce5b0f6391985be9005
        const data = fetch(url).then((response) => response.json());
        let symbol = '';
        let name = '';
        data.then((result) => {
            let randNum = Math.floor(Math.random() * result.length);
            symbol = '' + result[randNum].symbol;
            name = '' + result[randNum].name;
            this.setState({companyName: name}); 
            this.setState({ticker: symbol}); 
        });
       
    }

    generateRandomStock = async () => {
        // const url = `${IEX_API.baseUrl}/ref-data/symbols?token=${IEX_API.apiToken}`
        // // https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_d2db7964a6dc4ce5b0f6391985be9005
        // const data = fetch(url).then((response) => response.json());
        // let symbol = '';
        // let name = '';
        // data.then(function(result) {
        //     let randNum = Math.floor(Math.random() * result.length);
        //     symbol = '' + result[randNum].symbol;
        //     name = '' + result[randNum].name;
        // });
        await this._randomSymbolName();
        // this.setState({companyName: 'name'});
        // this.setState({ticker: symbol});    
    }


    render() {
        return (
            <div>
                <button onClick={() => this.generateRandomStock()}>Discover Stock</button>
                <h1>Company Name: </h1>
                <h2>{this.state.companyName}</h2>
                <h1>Ticker: </h1>
                <h2>{this.state.ticker}</h2>
            </div>
        )
    }


}


export default DiscoverStocks;