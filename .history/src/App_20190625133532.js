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
        <Route exact path="/p" component={Productos} />
        <Route exact path="/p/edit:id" component={EditarProducto} />
      </Switch>
    </Router>
  );
}

export default App;
