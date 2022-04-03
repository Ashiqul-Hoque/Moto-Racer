import React from "react";
import "./Home.css";
import img1 from "../../images/image-1.png";
import img2 from "../../images/image-2.png";
import img3 from "../../images/image-3.png";

const Home = () => {
  return (
    <div className="hero-section">
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel
          earum aperiam iste delectus repellat blanditiis ullam. Ea, esse
          laboriosam!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsam
          eaque quibusdam quod quisquam magni molestiae eligendi ipsa excepturi
          maiores iusto, amet velit cum ipsum rerum odit quidem vero nobis id
          dolor! Dolorum maxime deleniti perspiciatis sit corporis veritatis
          libero.
        </p>
      </div>
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={img1} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img2} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img3} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
