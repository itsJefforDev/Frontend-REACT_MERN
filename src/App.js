
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navegacion from './components/Navegacion';
import CrearUsuarios from './components/CrearUsuarios'
import ListaUsuario from './components/ListaUsuario'


function App() {
  return (
    <div className="App">
      <Navegacion />
      <div class="container p-4 border">
        <Routes>
          <Route path='/' element={<ListaUsuario />} />
          <Route path='/CrearUsuarios' element={<CrearUsuarios />} />
          <Route path='/edit/:id' element={<CrearUsuarios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
