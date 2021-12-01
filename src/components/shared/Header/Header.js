import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-success w-100">
    
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/Inicio">
          Pagina Inicial
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Inicio">
               
              </Link>
              </li>
          </ul>
        </div>



        <Link className="navbar-brand" to="/">
          Produtos Cadastrados
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">
                
              </Link>
              </li>
          </ul>
        </div>

              <Link className="navbar-brand" to="/cadastro">
          Cadastrar Produtos
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit">
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header


