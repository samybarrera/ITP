//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import Materias from '../global/Materias';

//data
import items from '../data/menumat7';

class Siete extends Component {
	render() {

		return (
				<div className="Materias">

				  <Materias items={items} />
				</div>
			);
		
	}
}

export default Siete;