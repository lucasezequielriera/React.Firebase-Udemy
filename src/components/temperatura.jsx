import React, {Fragment, useState} from 'react';

const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19);
    const Subir = () => {
        setTemperatura(temperatura + 1);
    };
    const Bajar = () => {
        setTemperatura(temperatura - 1);
    };

    return (
        <div>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 19 ? 'Hace Calor' : 'Hace Frío'
                }
            </p>
            <button onClick={Bajar} className="h5">Reducir temperatura</button>
            <button onClick={Subir} className="h5">Aumentar temperatura</button>
        </div>
    )
}

export default Temperatura;