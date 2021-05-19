import React, {useState, useEffect} from 'react';

const Bienvenida = (props) => {
    const [Nombre, setNombre] = useState('Pedro');
    useEffect ( () => {
        setTimeout( () => {
            setNombre('Lucas');
        }, 2000)
    })
    const {nombre, edad} = props;
    return (
        <div>
            <h2>Bienvenido {nombre} con {edad} años de edad</h2>
            <h1>{Nombre}</h1>
        </div>
    )
}

export default Bienvenida;