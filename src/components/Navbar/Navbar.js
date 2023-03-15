import { Container,List } from "./styles";
import { TbDeviceCctv,TbBrandShopee,TbBusinessplan } from "react-icons/tb";
import { Link } from 'react-router-dom';
import React from 'react';
//import c1 from "../../components/Img/ieq2.jpg";

export default function Navbar() {
  

  return (
    <Container>
    
  


          <List>
  <li>
         <TbDeviceCctv />
         
         <Link to="/inicio">Pagina Inicial</Link>
            
        </li>
       

    <li>
      <TbBrandShopee />
      <Link to="/"> Produtos Cadastrados</Link>
   </li>
       
     <li>
         <TbBusinessplan/> 
         <Link to="/cadastro">Cadastrar Produtos</Link>
      </li>
      
    
      
      </List>
    

    </Container>
  );
}
