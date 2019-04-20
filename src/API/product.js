const axios = require('axios');


module.exports = {
    getAllProducts() {
        return axios.get(`/products`)
            .then(res => res.data)
    },
    getProductByID(productID) {
        return axios.get(`/products/${productID}`)
            .then(res => res.data);
    }
};