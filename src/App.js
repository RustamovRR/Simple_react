import React from "react";
import { Route } from "react-router-dom";
import Images from "./components/Images";
import Info from "./components/Info";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ margin: 50 }}>
      <Route exact path="/" component={Images} />
      <Route exact path="/info" component={Info} />
    </div>
  );
}

export default App;
