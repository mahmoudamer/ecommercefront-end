import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as APIUser from '../../API/user'


import './register.css';


class Register extends Component {


    state = {
        id: '',
        userName: '',
        password: '',
        email: ''
    };


    registerHandler = async (e) => {
        // console.log(this.state);
        e.preventDefault();
        await APIUser.register(this.state).then(
            async () => {
                const res = await APIUser.login(this.state);
                console.log(res)
                localStorage.setItem('token', res.token)
                localStorage.setItem('userName', res.user.userName)
                localStorage.setItem('userid', res.user._id)
                // this.props.history.push('/products')
                window.location.replace('/products')


            }
        )





        // this.props.userAdded(this.state);
    }
    render() {
        // console.log(register);
        // register();
        // console.log(this.state, localStorage)
        // console.log(this.props)

        return (
            <>
                <div className="register-parent">

                    <div className="register-container">
                        <form onSubmit={this.registerHandler}>

                            <input type="text" name="username" placeholder="user name" onChange={(e) => this.setState({ userName: e.target.value })}></input>
                            <input type="text" name="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                            <input type="text" name="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                            <div className="register-btn-container"></div>
                            <button
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




export default Register;