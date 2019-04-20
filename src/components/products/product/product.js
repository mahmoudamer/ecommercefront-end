import React from "react";
import productImg from '../../../assets/img/a4.jpg'


const product = (props) => {
    return (
        <>

            <div className="products-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="products-card">
                    <img className="products-card-img-top" src={productImg} alt="Card  cap" />
                    <div className="products-card-body">

                        <h5 className="products-card-title">
                            <span className="products-card-title-click">{props.name}</span>
                            <span className="products-card-title-price">{props.price}</span>
                            <div className="clear-float"></div>
                        </h5>


                        <p className="products-card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's
                            content.</p>


                        <span onClick={props.view} className="products-btn card">preview</span>
                        {/* <span  className="products-btn card">edit</span> */}
                        <span onClick={props.del} className="products-btn card">delete</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default product;