import { Container, Social } from './styles';
import { FaFacebook, FaWhatsapp,FaInstagram } from "react-icons/fa";
import React from 'react';
export default function Footer() {
  return (
    <Container>
     
      <Social>


      <a href=" /">
            
            <FaWhatsapp/>
            </a>
            
            
            
             <a href="/">
                 
                 <FaFacebook/>
               </a>
                           
               <a href="/">
                 
                 <FaInstagram/>
               </a>
               
        </Social>
     
      <span>SEGURANÇA ELETRONICA</span>
      <span>INSTALADORES DE MARABÁ</span>
      <span>OS MELHORES VOÇÊS ENCONTRAM AQUI</span>
        </Container>
  )
}