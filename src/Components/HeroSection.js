import React from 'react';
import CustomImage from './CustomImage';

function HeroSection() {
  const images = [
    "img/gallery/img1.jpg",
    "img/gallery/img2.jpg",
    "img/gallery/img3.jpg",
    "img/gallery/img4.jpg",
    "img/gallery/img5.jpg",
    "img/gallery/img6.jpg",
    "img/gallery/img7.jpg",
    "img/gallery/img8.jpg",
    "img/gallery/img9.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">A Little About Ourselves</h1>
        <p className="info">Yummy Cha was founded in 2021. We proudly bring you the best F&B services that are guaranteed in quality with reasonable and affordable prices. So start exploring now.</p>
        <button className="button">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index)=> (
            <CustomImage key={index} imgSrc={src} pt={"85%"}/>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
