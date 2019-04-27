import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as APIUser from '../../API/user'

import './addForm.css';

class addForm extends Component {

  state = {
    image: ''
  }

  addproductHandler = async (e) => {
    e.preventDefault();
    const { name: { value: name },
      price: { value: price },
      image: { value: image },
      description: { value: description } } = e.target.elements;
    // console.log(name, price, image);
    await APIUser.addProduct({ name, price, image, description });
    window.location.reload()
  }

  imageHandler = async (e) => {
    await this.setState({ image: e.target.value })
  }

  render() {

    console.log(this.state.image)

    let items;
    if (!localStorage.getItem('token')) {
      items = <div className='notAuth-container'><h1 className="notAuth">please sign in to be able to add products</h1></div>        // do not forget the style 
    } else {
      items = (
        <div className="addForm-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">

          <div className="addForm-card">
            <img className="addForm-card-img-top" src={this.state.image} alt="failed to load yourImage"></img>
            <form onSubmit={(e) => this.addproductHandler(e)}>
              <div className="addForm-card-body">

                <h5 className="addForm-card-title">
                  <input
                    required
                    name='name'
                    type="text"
                    placeholder="product name"
                  ></input>

                  <input
                    required
                    name='price'
                    type="number"
                    placeholder="price"
                  ></input>

                  <input
                    onChange={(e) => this.imageHandler(e)}
                    name='image'
                    type="url"
                    placeholder="imageURL"
                  ></input>

                  <div className="clear-float"></div>

                </h5>
                <textarea
                  maxLength="50"
                  rows="1"
                  wrap="hard"
                  className="addForm-card-textArea"
                  placeholder="enter your description"
                  name="description">
                </textarea>
                {/* <p className="addForm-card-text">Some quick example text to build on the card title and make up the bulk of
      the card's content.</p> */}
                <button type="submit" className="addForm-btn card">save</button>
                <NavLink
                  to="/products"
                  className="addForm-btn card">go to products</NavLink>
              </div>
            </form>
          </div>
        </div>
      )
    }

    return (
      <>
        <div className="add-parent">

          <div className="addForm-container">

            {items}


          </div>

        </div>
      </>
    );
  }
}

export default addForm;
