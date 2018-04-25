import React, { Component } from 'react';
import './App.css';

// components
import { Header } from './components/layouts/header';
import { Footer } from './components/layouts/footer';
import { Home } from './components/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
