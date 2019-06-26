import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Productos from './components/Productos';
import Producto from './components/Producto';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-5">
      <Switch>
        <Route exact path="/new" component={AgregarProducto} />
        <Route exact path="/p" component={Productos} />
        <Route exact path="/p/:id" component={Producto} />
        <Route exact path="/p/edit/:id" component={EditarProducto} />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
