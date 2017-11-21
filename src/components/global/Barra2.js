//dependencies
import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import './css/Barra2.css';

class Barra2 extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.string.isRequired
	};

  render() {
  	const {title, items} = this.props;


    return (
      <div className="Barra2">
        
        <h2>{title}</h2>

        <ul className="menu-barra2">
        	{
            items && items.map(
              (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
          }
        </ul>
        
         
      </div>
    );
  }
}  


export default Barra2;
