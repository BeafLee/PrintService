import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <body>
        <div className="card text-center">
          <div className="card-header">
            Imprimir
          </div>
          <div className="card-body">
            <input type="text" className="my-2 form-control" placeholder="Código" />
            <button type="button" className="btn btn-success">Confirmar</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
