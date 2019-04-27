const axios = require('axios');


module.exports = {
    getAllProducts() {
        return axios.get(`/products`)
            .then(res => res.data)
    },
    getProductByID(productID) {

        return axios.get(`/products/${productID}`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
            .then(res => res.data);
    },


};