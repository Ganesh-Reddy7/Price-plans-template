import React from 'react';
import './Salesitem.css';
import Salesitem from './Salesitem';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Sales = () => {
  const screenwidth = window.innerWidth;
  const responsive = [
    {
      breakpoint: 464,
      settings: {
        showArrows: true,
        showStatus: false,
        showIndicators: false,
        emulateTouch: true,
        showThumbs: false, // Hide thumbnail navigation
        infiniteLoop: true,
        centerMode: false,
        centerSlidePercentage: 100,
        items: 1, // Number of visible items on mobile
      },
    },
  ];
  return (
    <div>

    {screenwidth <= 464? (
        <div>
        <Carousel responsive={responsive}>
            <Salesitem />
        </Carousel>
        </div>
    ):(
    <div className="container grid">
        <Salesitem />
    </div>
    )
  };
  </div>

  );
}

export default Sales