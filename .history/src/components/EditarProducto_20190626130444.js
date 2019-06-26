import React, {useState, useRef } from 'react';
import Error from './Error';
import Swal from "sweetalert2";
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function EditarProducto({producto}) {

    const precioPlatilloRef = useRef('');
    const nombrePlatilloRef = useRef('');



    const [error, guardarError] = useState(false);
    const [categoria, guardarCategoria] = useState('');

    const leerValorRadio = e => {
        guardarCategoria(e.target.value);
    }


    const editarProducto = async e => {
        e.preventDefault();

        //Check categoria
        let categoriaPlatillo = (categoria === '') ? producto.categoria : categoria;

        const editarPlatillo = {
            precioPlatillo: precioPlatilloRef.current.value,
            nombrePlatillo: nombrePlatilloRef.current.value,
            categoria: categoriaPlatillo
        }

        // Send request

        const url = `http://localhost:4000/restaurant/${producto.id}`;

        try {
            const resultado = await axios.put(url, editarPlatillo);
            
        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'                
              })
        }

    }

    return (
        <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Edit product</h1>

      {(error) ? <Error mensaje='All fields are required' /> : null }

      <form className="mt-5"
        onSubmit={editarProducto}
        >
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Name"            
            ref={nombrePlatilloRef}
            defaultValue={producto.nombrePlatillo}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Price"   
            ref={precioPlatilloRef}        
            defaultValue={producto.precioPlatillo} 
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
              defaultChecked={(producto.categoria === 'desserts')}
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
              defaultChecked={(producto.categoria === 'drinks')}
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
              defaultChecked={(producto.categoria === 'cuts')}
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
              defaultChecked={(producto.categoria === 'salad')}
            />
            <label className="form-check-label">Salad</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Save"
        />
      </form>
    </div>
    )
}

export default EditarProducto;