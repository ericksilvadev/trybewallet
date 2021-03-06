import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Wallet } from './pages';
import './css/main.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
