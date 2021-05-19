import React from 'react';

const Bienvenida = (props) => {
    const {nombre, edad} = props;
    return (
        <div>
            <h2>Bienvenido {nombre} con {edad} años de edad</h2>
        </div>
    )
}

export default Bienvenida;