import { Container, Social } from './styles';
import { FaFacebook, FaWhatsapp,FaInstagram } from "react-icons/fa";
import React from 'react';
export default function Footer() {
  return (
    <Container>
     
      <Social>


      <a href="  https://api.whatsapp.com/send?phone=5591982390708&data=AWDy3Hf-oQfWn7Syzd8pJ_MlOjYIoghvjhfgubtS_qKP9hVbOUKymlrhXKhaxMF_4Z7ypOsbpTadf2EkRTGbXsjO7NYeJx3i
      iOpao7H5F8u49KPACy0Wy4CObKp6eaOXZy0QClfFlEQ-jGMKpU1qPCD-2r6HchNmCDZ5CpGwRa-v7iOnavOjIFO5H7oW-C1wvYOEuYgUuHue3xsLTHXo9-4Aw2N5ywN1XdQ3TH8h53tHzjPlSC1cdFh9x2Ot4lWxWW
      m6gswbmRrrizJGSQPBvKtAw5IX4QByzZhWL4r6wHPt5aufjRUsxeBDqHQ7r6hpw
      ls&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR
      3Uh-FxfqVWMeHC96SiWFGNArvfLqF4i93-9suwF9cKvcduJ2QyAqAlVzs/">
            
            <FaWhatsapp/>
            </a>
            
            
            
             <a href="https://pt-br.facebook.com/ieqsedemaraba/">
                 
                 <FaFacebook/>
               </a>
                           
               <a href="https://www.instagram.com/ieqsedemaraba/">
                 
                 <FaInstagram/>
               </a>
               
        </Social>
     
      <span>IEQ</span>
      <span>Igreja do Evangelio Quadrangular</span>
      <span>Marabá-PA</span>
        </Container>
  )
}