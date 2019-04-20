import React from "react";
import productMain from "../../assets/img/a4.jpg";
import { connect } from "react-redux";
import './product-details.css';


const productDetails = props => {
  console.log("DETAILS", props)
  return (
    <>
      <div className="details-parent">
        <div className="details-container">
          <div className="details-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="details-card">
              <img className="details-card-img-top" src={productMain} alt="Cardcap" ></img>
              <div className="details-card-body">

                <h5 className="details-card-title">
                  <span className="details-card-title-click">{props.selected.name}</span>
                  <span className="details-card-title-price">{props.selected.price}</span>
                </h5>


                <p className="details-card-text">Some quick example text to build on the card title and make up the bulk of
                    the
                    card's
                        content.</p>


                {/* <a href="#" className="btn card">edit</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selected: state.selectedProduct
  };
};
export default connect(mapStateToProps)(productDetails);
