import React from "react";
import './product.css'

const product = (props) => {

    return (
        <>

            <tbody align='middle' className="separator">
                <tr className='first-row'>
                    <td className='rowspan' rowSpan="4">
                        <div className='image-container'>
                            <img className="image" src={props.image} alt="" />
                        </div>
                    </td>
                    <td><h4 className="name">{props.name}</h4> </td>
                </tr>
                <tr>
                    <td className='price'>{props.price}<span className='egp'> EGP</span></td>
                </tr>
                <tr>
                    <td className='company-name'>{props.companyName}</td>
                </tr>
                <tr>
                    <td ><button onClick={props.edit} className=' btn btn-success' id="edit" > edit</button></td>

                </tr>

            </tbody>
        </>
    )
}

export default product;