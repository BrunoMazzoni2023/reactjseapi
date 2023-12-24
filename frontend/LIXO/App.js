import Home  from './components/Home';
import Sobre from './components/Sobre';
import Form from './components/Form';
import GlobalStyle from "../src/styles/global.js";
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1> AMinha app</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/"> Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/sobre"> Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/form"> Página Inicial</Nav.Link>
      </Nav>


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sobre" element={<Sobre/>}></Route>
      <Route path="/Form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
