import React from 'react';

function ProductoLista({producto}) {

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p data-categoria={producto.categoria}>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">€{producto.precioPlatillo}</span>
            </p>
            <div>

            </div>
        </li>
    )

}

export default ProductoLista;