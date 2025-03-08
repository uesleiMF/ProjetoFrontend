import './App.css';
import Navbar from "./components/Navbar/Navbar";

import Cadastro from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View/View';
import Edit from './pages/Edit/Edit';
import Inicio from './pages/Inicio/Inicio';
import Footer from "./components/Footer/Footer";
import ListaProdutos from "./pages/Home/ListaProdutos";
function App() {
  return (
    
            <div>   
       <Navbar/>
      
      <Routes>
       
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/produtos" element={<ListaProdutos />} />
      </Routes>
<Footer/>
      
      </div>

        

  );
}

export default App;