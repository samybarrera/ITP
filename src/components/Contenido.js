//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

//components
import Content from './global/Content';
import Barra from './global/Barra';
import Footer from './global/Footer';
import Body from './global/Body';

//data
import items from '../data/menu';

class Contenido extends Component {

	static PropTypes = {
		children: PropTypes.object.isRequired
	};

  render() {
  	const { children } = this.props;
    return (
      <div className="Contenido">
       
        <Content />
        <Barra title="Repositorios del Insituto Tecnològico de Pachuca" items={items} />
        <Body body={children} />
        <Footer copyright="&copy; 2017 RepositoriosITP. Todos los derechos reservados." />
      </div>
    );
  }
}  


export default Contenido;
