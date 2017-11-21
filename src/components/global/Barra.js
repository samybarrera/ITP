//dependencies
import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import './css/Barra.css';

class Barra extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired
	};

  render() {
  	const {title, classe, items} = this.props;


    return (
      <div className="Barra">
        
        <h2>{title} <span><i class="fa fa-file-pdf-o" aria-hidden="true"></i></span></h2>

        <ul className="menu">
        	{
            items && items.map(
              (item, key) => <li key={key}><Link to={item.url}><span><i class={classe} aria-hidden="true"></i></span>{item.title}</Link></li>
              )
          }
        </ul>
        
         
      </div>
    );
  }
}  


export default Barra;
