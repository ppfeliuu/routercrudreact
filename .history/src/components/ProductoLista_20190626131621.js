import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';

function ProductoLista({producto}) {

    const eliminarProducto = id => {
        console.log(id);

        //Eliminar items

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })


    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p data-categoria={producto.categoria}>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">€{producto.precioPlatillo}</span>
            </p>
            <div>
                <Link to={`/products/edit/${producto.id}`} className="btn btn-success mr-2">Edit</Link>

                <button type="button" className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Delete &times;</button>
            </div>
        </li>
    )

}

export default ProductoLista;