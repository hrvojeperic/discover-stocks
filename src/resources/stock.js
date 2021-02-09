import IEX_API from '../resources/iex_api';

const stock = {
    
    // fetch crypto symbol array from api
    getSymbol: (callback, errorCallback) => {

        const url = `${IEX_API.baseUrl}/ref-data/crypto/symbols?token=${IEX_API.apiToken}`;
        let errorCode = 0;
        // fetch api data
        fetch(url)
        .then((response) => {
            if (response.ok) { // check for errors
                return response.json();
            }
            else {
                errorCode = response.status;
                throw new Error(response.status);
            }
        })
        .then((arr) => {
            callback(arr);
        })
        .catch((error) => { // catch error and print
            console.log(error);
            if (errorCode === 429) { // too many requests error code
                errorCallback();
            }
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