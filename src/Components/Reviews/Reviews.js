import React from "react";
import useData from "../../hooks/useData";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useData();

  return (
    <div>
      <h3 className="text-center mt-4 text-primary">
        Reviews from the happy clients
      </h3>
      <div className="card-container">
        {reviews.map((review) => (
          <SingleReview review={review} key={review.id}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
