//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//components

import Barra2 from '../global/Barra2';


//data
import items from '../data/menuindu';

class Industrial extends Component {



	render() {
	

		return (
				<div className="Industrial">

				  
				  <Barra2 title="Elejir el semestre" items={items} />
				 
				</div>
			);
		
	}
}

export default Industrial;