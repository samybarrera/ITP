import React, { Component } from 'react';
import firebase from 'firebase';

//components
import Header from './global/Header';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}  


export default App;
