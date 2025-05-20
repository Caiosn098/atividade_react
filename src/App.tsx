import './App.css'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Home
        titulo="Título"
        texto="Teste texto."
      />
      <Contador
      />
      <Tarefa
      />
      <Login
      />
    </>
  )
}

export default App