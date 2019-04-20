import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './addForm.css';
import { addProduct } from '../../API/user';

import product from "../../assets/img/a4.jpg";

class addForm extends Component {

  state = {
    name: "",
    price: "",

  };

  changeHandler(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  addproductHandler = async (e) => {
    e.preventDefault();
    const { name: { value: name }, price: { value: price } } = e.target.elements;
    console.log(name, price);
    const res = await addProduct({ name, price });
    console.log(res);
  }



  render() {
    return (
      <>
        <div className="add-parent">

          <div className="addForm-container">
            <div className="addForm-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="addForm-card">
                <img className="addForm-card-img-top" src={product} alt="Card cap"></img>
                <form onSubmit={this.addproductHandler}>
                  <div className="addForm-card-body">

                    <h5 className="addForm-card-title">
                      <input
                        name='name'
                        type="text"
                        placeholder="product name"
                        onChange={event => this.changeHandler(event, "name")}
                      ></input>

                      <input
                        name='price'
                        type="text"
                        placeholder="price"
                        onChange={event => this.changeHandler(event, "price")}
                      ></input>

                      <div className="clear-float"></div>
                    </h5>
                    <p className="addForm-card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                    <button type="submit" className="addForm-btn card">save</button>
                    <NavLink
                      to="/products"
                      className="addForm-btn card">go to products</NavLink>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>


      </>
    );
  }
}

export default addForm;
