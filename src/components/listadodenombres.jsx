import React, { useState } from 'react';
import uniqid from 'uniqid';
import { useParams } from 'react-router-dom';

const Listadodenombres = () => {

    const {id} = useParams()

    const [nombre, setNombre] = useState('');
    const [listanombres, setlistanombres] = useState([]);

    const addNombre = (e) => {
        (e).preventDefault();
        const nuevonombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setlistanombres([...listanombres, nuevonombre]);
        setNombre('');
    }

    return(
        <div>
            <h1>Aplicación CRUD Básica</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map( item =>
                                <li key={item.id} className="list-group-item">{item.tituloNombre}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={addNombre} className="form-group">
                        <input onChange={ (e) => {
                            setNombre(e.target.value)} }
                            className="form-control"
                            type="text"
                            placeholder="Introduce el nombre"
                            value={nombre}/>
                            
                        <input className="form-control btn btn-info mt-2 mb-2" type="submit" value="Registrar"/>
                    </form>
                </div>
            </div>
            <h1>{id}</h1>
        </div>
    )
}

export default Listadodenombres;