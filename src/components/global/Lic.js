//dependencies
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import './css/Lic.css';

class Lic extends Component {

	static propTypes = {
		
		items: PropTypes.string.isRequired
	};

render() {
  	const {items} = this.props;


    return (
      <div className="Lic">
        
        <img src="./images/ingenierias.jpg" className="Lic-img" alt="Ingenierias" />
        <h2></h2>

        <ul className="Lic-menu">
        	{
            items && items.map(
              (item, key) => <ul key={key}><Link to={item.url}>{item.title}</Link></ul>
              )
          }
        </ul>
        
         
      </div>
    );
  }
}  


export default Lic;