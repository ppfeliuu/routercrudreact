import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function ProductoLista({ producto, guardarRecargarProductos }) {
  const eliminarProducto = id => {
    console.log(id);

    //Eliminar items

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {     

        try {
            const url = `http://localhost:4000/restaurant/${id}`;

            const resultado = await axios.delete(url);
    
            if (resultado.status === 200) {
              Swal.fire("Deleted!", "Your product has been deleted.", "success");
            }
        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'                
              })
        }
      }
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p data-categoria={producto.categoria}>
        {producto.nombrePlatillo}{" "}
        <span className="font-weight-bold">€{producto.precioPlatillo}</span>
      </p>
      <div>
        <Link
          to={`/products/edit/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Edit
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          Delete &times;
        </button>
      </div>
    </li>
  );
}

export default ProductoLista;
