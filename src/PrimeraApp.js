
import React from 'react';
// Functional Component (FC)

const PrimeraApp = () => {

    const saludo = 'Holaaaz';

    return (
        <> 
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre>*/}
            <p>Mi primera aplicación</p>
        </>
    );
}
 
export default PrimeraApp;