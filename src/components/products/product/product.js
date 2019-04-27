import React from "react";
import defaultImg from '../../../assets/img/default.jpg.png'


const product = (props) => {
    return (
        <>
            <div className="products-card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="products-card">
                    <img className="products-card-img-top" src={props.image ? props.image : defaultImg} alt="Card  cap" />
                    <div className="products-card-body">
                        <h5 className="products-card-title">
                            <span className="products-card-title-click">{props.name}</span>
                            <span className="products-card-title-price">{props.price}</span>
                            <div className="clear-float"></div>
                        </h5>
                        <p className="products-card-text">{props.description ? props.description : <>no description</>}</p>
                        <span onClick={props.showDetails} className="products-btn card">preview</span>
                        <span onClick={props.delete} className="products-btn card">delete</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default product;