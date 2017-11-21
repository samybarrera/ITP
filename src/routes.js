//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components

import Contenido from './components/Contenido';
import Industrial from './components/Industrial';
import Ingenieria from './components/Ingenieria';
import Licenciatura from './components/Licenciatura';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>

  <Contenido>
    <Switch>
      <Route path="/Industrial" component={Industrial} />
      <Route path="/Ingenieria" component={Ingenieria} />
      <Route path="/Licenciatura" component={Licenciatura} />
      <Route path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </Contenido>;


export default AppRoutes;