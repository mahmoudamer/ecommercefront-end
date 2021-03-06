import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:61432';


ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
