import React, { Component } from "react";
import * as APIUser from '../../API/api'

import './edit.css';


class Edit extends Component {

  state = {

  }

  componentDidMount = async () => {
    const res = await APIUser.getProductByID(this.props.match.params.id);
    this.setState({
      ...res
    })
    console.log(this.state)
  }

  editproductHandler = async (e) => {
    e.preventDefault();
    const { productName: { value: productName },
      price: { value: price },
      imageUrl: { value: imageUrl },
      companyName: { value: companyName } } = e.target.elements;
    await APIUser.editProduct(this.props.match.params.id, { productName, price, imageUrl, companyName });
    this.props.history.push("/products")

  }

  resetHandler = () => {
    this.setState({
      productName: '',
      price: 0,
      imageUrl: '',
      companyName: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div className="edit-parent">
          <div className='edit-img-parent'>
            <img className="edit-img" src={this.state.imageUrl} alt="preview yourImage"></img>
          </div>
          <form onSubmit={this.editproductHandler} className='edit-form'>
            <div className="edit-form-container">

              <div className="input-container">
                <input
                  id="first"
                  className="form-control"
                  required
                  name='productName'
                  type="text"
                  onChange={(event) => this.setState({ productName: event.target.value })}
                  value={this.state.productName || ''}
                  placeholder='name'
                ></input>

                <input
                  id="second"
                  className="form-control"
                  required
                  name='price'
                  type="number"
                  onChange={(event) => this.setState({ price: parseInt(event.target.value) })}
                  value={this.state.price || ''}
                  placeholder='price'
                ></input>

                <input
                  id="third"
                  className="form-control"
                  required
                  name='imageUrl'
                  type="url"
                  onChange={(event) => this.setState({ imageUrl: event.target.value })}
                  value={this.state.imageUrl || ''}
                  placeholder='image URL'
                ></input>

                <input
                  id="fourth"
                  className="form-control"
                  required
                  name="companyName"
                  onChange={(event) => this.setState({ companyName: event.target.value })}
                  value={this.state.companyName || ''}
                  placeholder="company name"
                ></input>

              </div>

              <button id="update" type="submit" className="btn btn-success">save</button>
              <button
                id="reset"
                onClick={this.resetHandler}
                className="btn btn-danger">reset</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Edit;
