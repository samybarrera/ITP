import React, { Component } from 'react';
import firebase from 'firebase';

import './css/Header.css';

class Header extends Component {

  constructor () {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth () {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

    .then(result => console.log(`${result.user.email} ha iniciado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));

  }

  handleLogout () {
    firebase.auth().signOut()

    .then(result => console.log(`${result.user.email} ha salido de sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));

  }

  renderLoginButton () {
    //si esta logeado
    if (this.state.user) {
      return(

        <div>
        <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
        <p>BIENVENIDO </p>
        <p> {this.state.user.displayName}!</p>
        <button onClick={this.handleLogout}>Salir</button>
        </div>

        );
    }else{

      return(

      <button onClick={this.handleAuth}>login con google</button>

      );

    }

  }



  render() {
    return (
      <div className="Header">
        <div className="App-header">
          
          <h2>ITP REGISTRO <img src="./images/LITP.ico" className="App-logo" alt="ITP" /></h2>

          <p className="App-intro">
            {this.renderLoginButton()}

         </p>
         
          
        </div>
        
         
      </div>
    );
  }
}  


export default Header;
