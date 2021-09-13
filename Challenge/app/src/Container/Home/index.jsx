import React, { Component } from "react";
import Box from "../../Component/Box";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Container">
        <div className="text">
        <h1>The privacy-friendly URL Shortener</h1>
        </div>
        <div>
            <Box/>
        </div>
      </div>
    );
  }
}
