import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const Validar = (event) => {
        event.preventDefault();
        // Si no hay una cadena de caractéres //
        if(!nombre.trim()) {
            alert("El nombre esta vacio");
            return;
        }
        else if(!edad.trim()) {
            alert("La edad está vacia");
            return;
        } else {
            alert("Perfecto!");
        }
    }

    return (
        <div className="container">
            <h2 className="lead display-6">Formulario de prueba</h2>
            <form onSubmit={Validar} className="form-group row">
                <input
                    className="form-control col mb-2 m-2"
                    placeholder="Nombre"
                    type="text"
                    onChange={ (e) => {setNombre(e.target.value) }}
                />
                <input
                    className="form-control col mb-2 m-2"
                    placeholder="Apellido"
                    type="text"
                    onChange={ (e) => {setEdad(e.target.value) }}
                />
                <input
                    className="form-control btn btn-success"
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Formulario;