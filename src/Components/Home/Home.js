import React from "react";
import "./Home.css";
import img1 from "../../images/image-1.png";
import img2 from "../../images/image-2.png";
import img3 from "../../images/image-3.png";
import useData from "../../hooks/useData";
import SingleReview from "../SingleReview/SingleReview";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useData();
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero-section">
        <div>
          <h1>
            Yamaha <span className="text-primary">Aerox 155</span>
          </h1>
          <p>
            The Yamaha AEROX 155 has been designed with three focus points -
            Proud Body Size, Athletic Proportions and the X Centre Motif, under
            the design concept of a “Heart-Shaking Speedster”. Powered by 155cc
            Blue Core, LC4V SOHC FI ENGINE WITH VVA.
          </p>
          <h3>Features: </h3>
          <div className="feature">
            <li>
              155 cc Liquid-cooled, 4-valve, FI engine with VVA (Variable Valve
              Actuation)
            </li>
            <li>Smart Motor Generator System</li>
            <li>Automatic Stop & Start System</li>
            <li>Y-CONNECT APP</li>
            <li>LED Headlight with LED Position Lights</li>
            <li>24.5 L Under-Seat Storage</li>
            <li>Multi-Function Key Switch</li>
          </div>
        </div>
        <div className="bike-slider">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide carousel-fade "
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

      <div className="review-heading">
        <h2>Reviews</h2>
      </div>
      <div className="card-container">
        {reviews.slice(0, 3).map((review) => (
          <SingleReview review={review} key={review.id}></SingleReview>
        ))}
      </div>
      <div className="mb-5">
        <button
          className="btn btn-primary d-block mx-auto px-5"
          onClick={() => navigate("/reviews")}
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
