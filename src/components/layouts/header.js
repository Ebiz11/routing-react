import React from "react";
import logo from '../../logo.svg';

export class Header extends React.Component {
  render() {
    return(
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
      </div>
    )
  }
}