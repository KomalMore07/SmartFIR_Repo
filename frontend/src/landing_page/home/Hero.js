import React, {useState, useEffect} from "react";

const slides = [
  "/media/images/home2.jpg",
  "/media/images/home3.jpg",
  "/media/images/home.jpg"
];

function Hero() {
     const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4s
    return () => clearInterval(timer);
  }, []);
  return (
    
        <div className="carousel-container">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`carousel-item ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
      );
}

export default Hero;
