import { useState } from "react";

function Contador() {

    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 2**4);
    }

    return (
        <div>
            <h2>Componente Contador</h2>
            <p>O valor atual é: {valor}</p>
            <button onClick={handleClick}>Adicionar 2⁴</button>
        </div>
    )
}

export default Contador