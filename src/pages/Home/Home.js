//import { Carousel } from 'react-responsive-carousel';
import React from "react";
import { Logo } from "./styles";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import c0 from "../../components/Img/c0.jpg";
import c1 from "../../components/Img/c1.jpg";
import c2 from "../../components/Img/c2.jpg";
import c3 from "../../components/Img/c3.jpg";
import c4 from "../../components/Img/c4.jpg";
import c5 from "../../components/Img/c5.jpg";
import c6 from "../../components/Img/c6.jpg";
import c7 from "../../components/Img/c7.jpg";
import c8 from "../../components/Img/c8.jpg";
import c9 from "../../components/Img/c9.jpg";
import ieq from "../../components/Img/ieq2.jpg";

import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Social } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container">
      <div className="card mt-4 bg-info">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3 text-center "> REDE DE CASAIS</h3>
              <h4 className="mx-3 my-3 text-center"> AMAI SEMPRE</h4>
            </div>
          </div>
        </div>

        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c0}
              height="350px"
              alt="slide 1"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c1}
              height="350px"
              alt="slide 2"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c2}
              height="350px"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c3}
              height="350px"
              alt="slide 4"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c4}
              height="350px"
              alt="slide 5"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c5}
              height="350px"
              alt="slide 6"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c6}
              height="350px"
              alt="slide 7"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c7}
              height="350px"
              alt="slide 8"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c8}
              height="350px"
              alt="slide 9"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c9}
              height="350px"
              alt="slide 10"
            />
          </CCarouselItem>
        </CCarousel>

        <div></div>
      </div>

      <div className="card mt-4 bg-info">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h4 className="mx-3 my-3 text-center ">
                {" "}
                Visite-nós em nossa (Igreja)
              </h4>
              <h4 className="mx-3 my-3 text-center "> Ou uma </h4>
              <h4 className="mx-4 my-4 text-center ">
                {" "}
                (Celula) mais proxima de sua casa
              </h4>

              <h6 className="mx-3 my-3 text-center">
                {" "}
                CLIQUE EM UMA DAS IMAGENS ABAIXO:
              </h6>

              <Social>
                <s>
                  <BsFillArrowDownCircleFill />
                </s>
              </Social>

              <Logo>
                <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                  <img src={ieq} alt="bo" />
                </a>
                <h6 className="mx-3 my-3 text-center ">IEQ</h6>
                <h6 className="mx-3 my-3 text-center ">
                  Igreja Do Evangélio Quadrangular
                </h6>
                <h6 className="mx-3 my-3 text-center ">
                  Nova-Marabá ---Marabá-Pá
                </h6>
              </Logo>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 bg-success">
        <div className="row mb-3">
          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c1}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c2}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c3}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c2}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary "></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c1}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c2}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c1}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c2}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>

          <div class="col-4 p-3">
            <div className="card">
              <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img
                  src={c1}
                  alt="bo"
                  width="25px"
                  height="100px"
                  className="card-img-top"
                />
              </a>

              <div className="card-body">
                <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
                <span className="badge bg-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 mb-3 bg-info">
        <h5 className="mx-3 my-3 text-center">
          CONHEÇAM NOSSAS MIDIAS SOCIAIS **MINISTERIO AMAI**!{" "}
        </h5>

        <Social>
          <a href="https://www.facebook.com/ministerio.amai7">
            <FaFacebookSquare />
          </a>

          <a href="https://www.instagram.com/ministerio.amai/">
            <GrInstagram />
          </a>
        </Social>
      </div>
    </div>
  );
}
