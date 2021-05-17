import logo from './logo.svg';
import './App.css';
import Temperatura from './components/temperatura';
import Formulario from './components/formulario';
import Listadodenombres from './components/listadodenombres'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Temperatura />
        <hr></hr>
        <Formulario />
      </header>
      <body>
        <div className="container">
          <Listadodenombres />
        </div>
      </body>
    </div>
  );
}

export default App;
