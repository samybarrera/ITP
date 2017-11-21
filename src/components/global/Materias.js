//dependencies
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import './css/Materias.css';

class Materias extends Component {

	static propTypes = {
		
		items: PropTypes.string.isRequired
	};

render() {
  	const {items} = this.props;


    return (
      <div className="Materias">
        
        
        <h2>Materias</h2>

        <ul className="Materias-menu">
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


export default Materias;