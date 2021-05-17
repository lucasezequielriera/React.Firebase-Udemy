import React, {Fragment, useState} from 'react';
import uniqid from 'uniqid';

const Listadodenombres = () => {

    const [nombre, setNombre] = useState('');
    const [listanombres, setlistanombres] = useState([]);

    const addNombre = (e) => {
        (e).preventDefault();
        const nuevonombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setlistanombres([...listanombres, nuevonombre]);
    }

    return(
        <div>
            <h1>Aplicación CRUD Básica</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres</h2>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={addNombre} className="form-group">
                        <input onChange={ (e) => {setNombre(e.target.value)} } className="form-control" type="text" placeholder="Introduce el nombre"/>
                        <input className="form-control btn btn-info mt-2 mb-2" type="submit" value="Registrar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadodenombres;