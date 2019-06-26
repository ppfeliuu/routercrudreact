import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/new" component={AgregarProducto} />
      </Switch>
    </Router>
  );
}

export default App;
