const axios = require('axios');


module.exports = {
  register(user) {
    return axios.post(`/users`, user)
      .then(res => res.data);
  },

  login(user) {
    return axios.post(`/users/login`, user)
      .then(res => res.data)
  },

  getAllProducts() {
    return axios.get(`/products`, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  },

  getProductByID(productID) {
    return axios.get(`/products/${productID}`, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data)
  },

  addProduct(product) {
    return axios.post(`/products`, product, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  },

  removeProduct(productID) {
    return axios.delete(`products/${productID}`, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  }

};