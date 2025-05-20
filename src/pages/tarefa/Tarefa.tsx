import { useState, useEffect } from "react";

function Tarefa() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Bota casaco!');
        }else{
          setTarefa("Tira casaco!")
        }
    }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
            <h3>{tarefa}</h3>
            <p>Tira casaco!</p>
            <button onClick={() => setCompleted(!completed)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa