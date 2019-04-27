import React, { Component } from "react";
import Product from "./product/product";
import * as APIUser from '../../API/user'
import './products.css';


class Products extends Component {

  state = {
    products: []
  }

  async componentDidMount() {

    // const getall = async () => {
    const x = await APIUser.getUserProducts()
    const arr = [];
    for (const key in x) {
      arr.push({
        name: x[key].name,
        price: x[key].price,
        id: x[key]._id,
        image: x[key].image,
        description: x[key].description
      })
    }
    this.setState({ products: arr })

    // }
    // getall();
  }
  showDetailsHandler = (id) => {
    this.props.history.push(`/products/${id}`);
  };

  deleteHandler = (id) => {
    APIUser.removeProduct(id);
    window.location.reload()
    // const index = this.state.products.findIndex(p => p.id === id)
    // console.log(index)
    // this.state.products.splice(index, 1)
  }

  render() {
    // console.log(this.state)
    let items;
    if (!localStorage.getItem('token')) {
      items = <div className='notAuth-container'><h1 className="notAuth">please sign in to get access to Products</h1></div>        // do not forget the style 
    } else {

      items = this.state.products.map(product => (
        <React.Fragment key={product.id}>
          <Product
            description={product.description}
            image={product.image}
            name={product.name}
            showDetails={() => this.showDetailsHandler(product.id)}
            price={product.price}
            delete={() => this.deleteHandler(product.id)}
          // view={() => {
          //   this.props.viewProduct(product.id);
          //   this.props.history.push("./details");
          //   // console.log(props.history)
          // }}
          />
        </React.Fragment>
      ));
      // console.log(items)
    }
    return (
      <>
        <div className="products-parent">
          <div className="products-container">
            {items}
            <div className="clear-float"></div>
          </div>
        </div>
      </>
    )
  }
}


export default Products
