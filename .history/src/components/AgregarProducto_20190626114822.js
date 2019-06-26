import React, { useState } from "react";

function AgregarProducto() {

    const [nombrePlatillo, guardarNombre ] = useState('');
    const [precio, guardarPrecio] = useState('');
    const [categoria, guardarCategoria] = useState('');
    const [error, guardarError] = useState(false);

    const leerValorRadio = e => {
        guardarCategoria(e.target.value);
    }

    const agregarProducto = e => {
        e.preventDefault();

        if (nombrePlatillo === '' || precio === '' || categoria === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        
    }


  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Add new product</h1>

      <form className="mt-5"
        onSubmit={agregarProducto}
        >
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Name"
            onChange={e => guardarNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Price"
            onChange={e => guardarPrecio(e.target.value)}
          />
        </div>

        <legend className="text-center">Category:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="desserts"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Desserts</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="drinks"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Drinks</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="cuts"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Cuts</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="salad"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Salad</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Add New Product"
        />
      </form>
    </div>
  );
}

export default AgregarProducto;
