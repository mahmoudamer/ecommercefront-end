const axios = require('axios');


module.exports = {

  getAllProducts() {
    return axios.get(`/api/products`)
      .then(res => res.data)
  },

  getProductByID(productID) {
    return axios.get(`/api/products/${productID}`)
      .then(res => res.data);
  },

  editProduct(productID, updatedProduct) {
    return axios.put(`/api/products/${productID}`, updatedProduct)
      .then(res => {
        console.log(res.data)
        return res.data
      });

  }
};