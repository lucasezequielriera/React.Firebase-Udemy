// import logo from './logo.svg';
import './App.css';
// import Temperatura from './components/temperatura';
// import Formulario from './components/formulario';
import Listadodenombres from './components/listadodenombres';
import Bienvenida from './components/bienvenida';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Link to="/">Base</Link>
      <Link to="/inicio">Inicio</Link>

      <Switch>

      <Route exact path="/">
        <br />Esta es la url base
          <Bienvenida
            nombre="Lucas"
            edad="25"
          />
        </Route>

        <Route path="/inicio/:id">
          <br />Estas en Inicio
          <div className="container">
            <Listadodenombres />
          </div>  
        </Route>

      </Switch>
      
    </Router>
    // <div className="App">
    //   <header className="App-header">
        // <Bienvenida
        // nombre="Lucas"
        // edad="25"/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Temperatura />
    //     <hr></hr>
    //     <Formulario />
    //   </header>
    //   <body>
        // <div className="container">
        //   <Listadodenombres />
        // </div>
    //   </body>
    // </div>
  );
}

export default App;
