import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store'

/*PÁGINAS*/
import Login from './view/login'
import Cadastrar from './view/new-user'
import Home from './view/home'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/cadastrar' component={Cadastrar} />
        <Route exact path='/Login' component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
