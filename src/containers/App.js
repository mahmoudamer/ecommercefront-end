import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import routes from '../routes/routes';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="parent">
        <BrowserRouter>
          <>
            {routes}
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
