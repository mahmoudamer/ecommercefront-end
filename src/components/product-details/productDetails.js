import React, { Component } from "react";
import defaultImg from "../../assets/img/default.jpg.png";
import * as APIUser from '../../API/product'

import './product-details.css';


class productDetails extends Component {

  state = {

  }

  componentDidMount = async () => {
    const res = await APIUser.getProductByID(this.props.match.params.id);
    console.log(res)
    this.setState({
      ...res
    })
  }

  // console.log("DETAILS", props)
  render() {
    console.log(this.state)
    return (
      <>
        <div className="details-parent">
          <div className="details-container">
            <div className="details-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="details-card">
                <img className="details-card-img-top" src={this.state.image ? this.state.image : defaultImg} alt="Cardcap" ></img>
                <div className="details-card-body">

                  <h5 className="details-card-title">
                    <span className="details-card-title-click">{this.state.name}</span>
                    <span className="details-card-title-price">{this.state.price}</span>
                  </h5>
                  <p className="details-card-text">{this.state.description ? this.state.description : <>no description</>}</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default productDetails;
