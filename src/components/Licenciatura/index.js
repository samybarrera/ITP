//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import Lic from '../global/Lic';

//data
import items from '../data/menuinge';

class Licenciatura extends Component {
	render() {

		return (
				<div className="Licenciatura">

				  <Lic items={items} />
				</div>
			);
		
	}
}

export default Licenciatura;