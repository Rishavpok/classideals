/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const photos = [
    {
        name:"photo 1",
        url:'https://cbazaar.s3.amazonaws.com/uploads/deals/0f45a69c7649e71f85fffc2e5a49d03e-230.png'
    },
    {
       name:"photo 2",
       url:'https://cbazaar.s3.amazonaws.com/uploads/deals/683c759befd6bceeb01ebd895265bd20-304.png'
   },
   {
       name:"photo 3",
       url:'https://cbazaar.s3.amazonaws.com/uploads/deals/043803f1216e4b6d9a54b00d98d3634b-492.png'
   },
   {
       name:"photo 4",
       url:'https://cbazaar.s3.amazonaws.com/uploads/deals/6b2474ecbec9f0b67010eb72df0bb82b-985.png'
   }
]


class Carousel extends Component {
    render() { 
        const settings = {
            dots: true,
            fade:true,
            infinite: true,
            speed: 500,
            autoplay:true,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className:"slides"
          };

              return (
                <div className="container" >
                  <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <img src={photo.url} alt={photo.name} />
                            </div>
                        )
                           
                    
                    } )}
                  </Slider>
                </div>
        
         );
    }
}
 
export default Carousel;