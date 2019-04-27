import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { login } from '../../API/user'

import './logIn.css';


class LogIn extends Component {

    state = {
        userName: '',
        password: '',
    };

    loginHandler = async (e) => {
        e.preventDefault();


        // const { username: { value: userName }, password: { value: password } } = e.target.elements;
        // console.log(userName, password);
        const res = await login(this.state);
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('userid', res.user._id)
        localStorage.setItem('userName', res.user.userName)
        console.log(localStorage)
        window.location.replace('/products')
    }
    // console.log("DETAILS", props)
    render() {


        return (
            <>
                <div className="logIn-parent">

                    <div className="logIn-container">
                        <form onSubmit={this.loginHandler}>
                            <input name="username"
                                type="text"
                                placeholder="user name"
                                onChange={(e) => this.setState({ userName: e.target.value })}></input>
                            <input name="password"
                                type="text"
                                placeholder="password"
                                onChange={(e) => this.setState({ password: e.target.value })}></input>
                            <div className="logIn-btn-container">
                                <button
                                    // onClick={() => this.props.userAdded(this.state.name, this.state.id, this.state.email)}
                                    type="submit"
                                    className="signIn-l">sign in</button>
                                <div>OR</div>
                                <NavLink className="register-l" to='/register'>register</NavLink>

                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
};


export default LogIn;
