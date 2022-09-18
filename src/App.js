import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="left"></div>
        <div className="middle">
          <Feed />
          <Footer />
        </div>
        <div className="right"></div>
      </div>
    </React.Fragment>
  );
}

export default App;
