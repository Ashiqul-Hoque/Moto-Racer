import React from "react";
import "./SingleReview.css";

const SingleReview = (props) => {
  const { name, img, text, star } = props.review;
  return (
    <div className="container">
      <div className="card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center">{text}</p>
        </div>
        <div className="card-footer text-center">
          <small>Rating : {star} out of 5 Stars</small>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
