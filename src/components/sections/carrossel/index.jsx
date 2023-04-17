import React from "react";
import logo from '../../../assets/imageCarrossel01.png';
import logo2 from '../../../assets/imageCarrossel02.png';
import Carousel from 'react-bootstrap/Carousel';

function MainBase() {
   return(
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
   )
    
}
  
export default MainBase;