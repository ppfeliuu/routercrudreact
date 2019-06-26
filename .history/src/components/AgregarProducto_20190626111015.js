import React from "react";

function AgregarProducto() {
  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Add new product</h1>

      <form className="mt-5">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
          />
        </div>

        <legend className="text-center">Category:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="postre"
            />
            <label className="form-check-label">Desserts</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="bebida"
            />
            <label className="form-check-label">Drinks</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="cortes"
            />
            <label className="form-check-label">Cuts</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="ensalada"
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
