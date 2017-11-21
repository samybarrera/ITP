//Dependencies
import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

//assets
import './css/Footer.css';

class Footer extends Component {

	static propTypes = {
		copyright: PropTypes.string
	};

  render() {
  	const { copyright = '&copy; REPitp 2017' } = this.props;
    return (
      <div className="Footer">
        
        <br />
        <p>{copyright}</p>
        
         
      </div>
    );
  }
}  


export default Footer;
