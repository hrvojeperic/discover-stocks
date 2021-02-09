import IEX_API from '../resources/iex_api';

const stock = {
    
    // fetch crypto symbol array from api
    getSymbol: (callback) => {
        const url = `${IEX_API.baseUrl}/ref-data/crypto/symbols?token=${IEX_API.apiToken}`;
        fetch(url)
        .then((response) => {
            if (response.ok) { // check for errors
                return response.json();
            }
            else {
                throw new Error("Error with API request.");
            }
        })
        .then((arr) => {
            callback(arr);
        })
        .catch((error) => { // catch and print error message
            console.log(error);
        });
    },

    /*
    // api data not loading
    getPrice: (symbol, callback) => {
        const url = `${IEX_API.baseUrl}/crypto/${symbol}/price&token=${IEX_API.apiToken}`;
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })
    }
    */

}

export default stock;