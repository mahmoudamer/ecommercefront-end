import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { register } from '../../API/user';
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions/actions';


import './register.css';


class Register extends Component {


    state = {
        id: '',
        name: '',
        email: ''
    };


    registerHandler = async (e) => {
        e.preventDefault();
        const { username: { value: userName }, password: { value: password }, email: { value: email } } = e.target.elements;
        console.log(userName, password, email);
        const res = await register({ userName, password, email });
        console.log(res);
        this.setState({
            name: res.userName,
            id: res._id,
            email: res.email
        })
        console.log(this.state)
    }



    render() {
        // console.log(register);
        // register();


        return (
            <>
                <div className="register-parent">

                    <div className="register-container">
                        <form onSubmit={this.registerHandler}>

                            <input type="text" name="username" placeholder="user name"></input>
                            <input type="text" name="password" placeholder="password"></input>
                            <input type="text" name="email" placeholder="email"></input>
                            <div className="register-btn-container"></div>
                            <button
                                onClick={() => this.props.userAdded(this.state.name,
                                    this.state.id, this.state.email)}
                                type="submit"
                                className="register-r">register</button>
                            <div>OR</div>
                            <NavLink className="signIn-r" to="/logIn">sign in</NavLink>
                        </form>

                    </div>
                </div>

            </>
        )
    }

};



const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userAdded: (name, id, email) => dispatch({
            type: actionTypes.SAVE_REGESTIRATION,
            userData: { name: name, id: id, email: email }
        }),
        // onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);