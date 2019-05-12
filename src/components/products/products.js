import React, { Component } from "react";
import Product from "./product/product";
import { withRouter } from 'react-router-dom';
import * as APIUser from '../../API/api'
import './products.css';


class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const x = await APIUser.getAllProducts()
    const arr = [];
    for (const key in x) {
      arr.push({
        productName: x[key].productName,
        price: x[key].price,
        id: x[key].id,
        imageUrl: x[key].imageUrl,
        companyName: x[key].companyName
      })
    }
    this.setState({ products: arr })
    console.log(this.state)
  }

  editHandler = (id) => {
    this.props.history.push(`/products/${id}`);
  };



  render() {
    let products = this.state.products.map(product => (
      <React.Fragment key={product.id}>
        <Product
          companyName={product.companyName}
          image={product.imageUrl}
          name={product.productName}
          edit={() => this.editHandler(product.id)}
          price={product.price}
        />
      </React.Fragment>
    ));
    return (
      <>
        <table id="table" className="table table-lg">
          {/* <tbody> */}

          {products}

          {/* </tbody> */}

        </table>
      </>
    )
  }
}


export default withRouter(Products);
