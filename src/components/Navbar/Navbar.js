import { Container,List, Logo } from "./styles";
import {FaRegUser,FaHeartbeat} from "react-icons/fa";
import {ImManWoman} from "react-icons/im";
import {GiMusicalNotes} from "react-icons/gi";
import { Link } from 'react-router-dom';
import React from 'react';
import c1 from "../../components/Img/ieq2.jpg";

export default function Navbar() {
  

  return (
    <Container>
    
  


          <List>


    <li>
      <FaHeartbeat />
      <Link to="/home">Pagina Inicial</Link>
   </li>
       
     <li>
         <ImManWoman/> 
         <Link to="/sobrenos">Sobrenós</Link>
      </li>
      
      <li>
         <GiMusicalNotes />
         
         <Link to="/app">Hinos Gospel</Link>
            
        </li>
       
        <li>
           <FaRegUser />
           <Link to="/">Login</Link>
            
                   
        </li>


      </List>
      <Logo>
     <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo"  />
                           
              </a>

     </Logo>


    </Container>
  );
}
