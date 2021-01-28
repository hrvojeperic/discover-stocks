import IEX_API from '../resources/iex_api';

const stock = {
    
    getSymbol: (callback) => {
        const url = `${IEX_API.baseUrl}/ref-data/symbols?token=${IEX_API.apiToken}`;
        // const url = `${IEX_API.baseUrl}/ref-data/region/us/symbols?token=${IEX_API.apiToken}`;
        fetch(url)
        .then((response) => response.json())
        .then((arr) => {
            const randNum = Math.floor(Math.random() * arr.length);
            callback(arr[randNum].symbol);
        });
    },

    getLogo: (symbol, callback) => {
        const url = `${IEX_API.baseUrl}/stock/${symbol}/logo?token=${IEX_API.apiToken}`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            callback(result.url);
        })
    },

    getCompanyInfo: (symbol, callback) => {
        const url = `${IEX_API.baseUrl}/stock/${symbol}/company?token=${IEX_API.apiToken}`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            callback(result.companyName, result.exchange, result.website, result.tags);
        })
    },

    getPrice: (symbol, callback) => {
        const url = `${IEX_API.baseUrl}/stock/${symbol}/intraday-prices?chartLast=1&token=${IEX_API.apiToken}`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            callback(result[result.length - 1].close, result[result.length - 1].date);
        })
    }

}

export default stock;