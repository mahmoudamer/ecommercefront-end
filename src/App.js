import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter } from "react-router-dom";
import routes from './routes/routes';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <Navigation />
            {routes}
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
