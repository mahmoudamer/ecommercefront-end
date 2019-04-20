import React from "react";
import { connect } from "react-redux";
import Product from "./product/product";
// import { REMOVE, SHOW_DETAILS, CHANGE_PAGE } from "../../store/actions/actions";
import * as actionTypes from '../../store/actions/actions';
import './products.css';


const Products = (props) => {

  let items;
  items = props.products.map(product => (
    <React.Fragment key={product.id}>
      <Product
        name={product.name}
        price={product.price}
        del={() => props.removeProduct(product.id)}
        view={() => {
          props.viewProduct(product.id);
          props.history.push("./details");
          // console.log(props.history)
        }}
      />
    </React.Fragment>
  ));
  // console.log(items)
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

const mapStateToProps = state => {
  return {
    products: state.products,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch({ type: actionTypes.REMOVE, payload: id }),
    viewProduct: id => dispatch({ type: actionTypes.SHOW_DETAILS, payload: id }),


  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
