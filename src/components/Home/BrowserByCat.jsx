/* eslint-disable react/prop-types */
// FlashSale.js
import Slider from 'react-slick';
import { useRef } from 'react';
import Sections from '../Elements/Sections';

import CategoryCard from '../Elements/CategoryCard';

const BrowserByCat = () => {
    const sliderRef = useRef(null);

  const items = [
    { id: 1, title: "Item 1", price: "$120", discount: "-40%", image: "path/to/image1.jpg", rating: 5 },
    { id: 2, title: "Item 2", price: "$960", discount: "-35%", image: "path/to/image2.jpg", rating: 4 },
    { id: 3, title: "Item 3", price: "$370", discount: "-30%", image: "path/to/image3.jpg", rating: 4.5 },
    { id: 4, title: "Item 4", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },
    { id: 5, title: "Item 5", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },
    { id: 6, title: "Item 5", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },
    { id: 7, title: "Item 5", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },
    { id: 8, title: "Item 5", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },
    { id: 9, title: "Item 5", price: "$375", discount: "-25%", image: "path/to/image4.jpg", rating: 3.5 },

    // Add more items as needed
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: true,
    centerMode: false,
    nextArrow:<></>,
    prevArrow: <></>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto my-10 border-b border-line-c">
      <Sections 
        next={() => sliderRef.current.slickNext()} 
        prev={() => sliderRef.current.slickPrev()}
        title="Categories"
        supTitle = 'Browse By Category'
        flash={false}
        slider={true}
        view={false}
        />
      <Slider ref={sliderRef} className="my-10 "  {...settings}>
      
      {items.map((item) => (
       <CategoryCard key={item.id} />
       ))}
     
     </Slider>
    
    </div>
  );
};

export default BrowserByCat;
