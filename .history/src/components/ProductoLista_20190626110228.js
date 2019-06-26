import React from 'react';
import { Link } from 'react-router-dom';

function ProductoLista({producto}) {

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p data-categoria={producto.categoria}>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">€{producto.precioPlatillo}</span>
            </p>
            <div>
                <Link to={`/products/edit/${producto.id}`} className="btn btn-success mr-2">Edit</Link>
            </div>
        </li>
    )

}

export default ProductoLista;