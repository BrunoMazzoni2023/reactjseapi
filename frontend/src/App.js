import Home  from './components/Home';
import Sobre from './components/Sobre';
import Form from './components/Form';
import Tarefas from './components/Tarefas'
/* import TarefasForm from '../LIXO/TarefasForm' */

import { Button } from 'react-bootstrap';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import styled from "styled-components"; */
 import './styles/App.css'; 


import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return (
    
    <div className="App"> 
      <BrowserRouter className='btnPrincipal'>
    <Button className='btnPrincipal' as={Link} to="/" variant="primary">
      Home
    </Button>

    <Button className='btnForm' as={Link}  to="/form" variant="primary">
      Criar
    </Button>
    
    <Button className='btnSobre' as={Link} to="/sobre" variant="primary">
      Ver
    </Button>
    <Button className='btnTarefa' as={Link} to="/tarefas" variant="primary">
      Tarefas
    </Button>
{/*     <Button className='btnTarefasForm' as={Link} to="/tarefasform" variant="primary">
      TarefasForm
    </Button> */}

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/sobre" element={<Sobre/>}></Route>
      <Route path="/tarefas" element={<Tarefas/>}></Route>
   {/*     <Route path="/tarefasform" element={<TarefasForm/>}></Route>   */}
    {/*   <Route path="/tarefasform/:id" element={<TarefasForm />} /> */}

    </Routes>

    </BrowserRouter>
    </div>

    
  );
};



export default App;

