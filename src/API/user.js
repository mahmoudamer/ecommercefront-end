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
  getUserProducts() {
    return axios.get(`/users/products`, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  },
  addProduct(product) {
    return axios.post(`/users/add`, product, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  },
  removeProduct(productID) {
    return axios.delete(`/users/products/${productID}`, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  },
  editProduct(productID, updatedProduct) {
    return axios.patch(`/users/products/${productID}`, updatedProduct, {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => res.data);
  }
};