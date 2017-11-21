//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import './css/Body.css';

class Body2 extends Component {

	static PropTypes = {
		 body: PropTypes.object.isRequired
	};

  render() {

  	const { body } = this.props;
    return (
      <div className="Body2">
        
        {body}
        
         
      </div>
    );
  }
}  


export default Body2;
