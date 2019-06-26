import React, {Fragment} from 'react';

function Productos({productos}) {
    return (
        <Fragment>
        <h1 className="text-center">Products</h1>
        <ul className="list-group mt-5">
            {productos.map(producto => (

            ))}
        </ul>
        </Fragment>
    )
}
