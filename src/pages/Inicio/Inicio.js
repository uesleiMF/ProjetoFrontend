import React from 'react'
import Carousel from 'react-bootstrap/Carousel'



const Inicio = () => {
  return (
       
     
    <div className="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     
      <div class="container bg-info">
    <div class="nome text-center">
    <h2>**PRODUTOS**</h2>
</div>
     
    <div class="p-1 mb-2 bg-info text-black">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block rounded-circle w-25"
      src="https://www.upperseg.com.br/img/products/kit-cerca-eletrica-industrial-c-big-hastes-de-1-metro-e-central-de-choque-power-cr-gcp-completo-50-metros-de-muro_1_300.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><justify> KIT CERCA ELETRICA</justify></h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-circle w-25"
      src="https://http2.mlstatic.com/D_NQ_NP_890139-MLB49398498970_032022-O.webp"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3><justify> KIT CAMERAS</justify></h3>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-circle w-25"
      src="https://http2.mlstatic.com/D_NQ_NP_723470-MLB31728797109_082019-O.webp" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><justify> KIT ALARME</justify></h3>
       </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>

  
</div>

                    </div>  
                  </div>
                  </div>
                
               
     
      <div class="container bg-info">
    <div class="nome text-center">
    <h2>**PRODUTOS**</h2>
</div>
<div class="p-1 mb-2 bg-info text-black">
<Carousel fade>
<Carousel.Item>
    <img
      className="d-block rounded-circle w-25"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy3Q2LLpMkEC2hyr18JAlDPvMG8Pla7TLpw&usqp=CAU" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><justify> SISTEMA</justify></h3>
     </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block rounded-circle w-25"
      src="https://www.prosecure.com.br/blog/wp-content/uploads/2020/12/seguran%C3%A7a-eletR%C3%B4nica.jpg" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><justify>SISTEMA</justify></h3>
     
   </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-circle w-25"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7oBufutp20Wd-j0eoacjtyWodAAwbFYgOg&usqp=CAU" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><justify> SPEED DOME </justify></h3>
    
   </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </div>  
                  </div>
              
                    
</div>
  
  
  )
}




export default Inicio