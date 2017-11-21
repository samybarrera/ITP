//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import Inge from '../global/Inge';

//data
import items from '../data/menuinge';

class Ingenieria extends Component {
	render() {

		return (
				<div className="Ingenieria">

				  <Inge items={items} />
				</div>
			);
		
	}
}

export default Ingenieria;