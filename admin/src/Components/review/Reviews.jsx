import React, { useState, useEffect } from "react";
import "./Reviews.css"; // Create a CSS file similar to Inquiries.css
import cross_icon from "../../assets/cross_icon.png";

const ListReviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  const fetchReviews = async () => {
    await fetch("http://localhost:5555/getreviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data.reviews);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="listReviews">
      <h1>Reviews List</h1>
      <div className="listReviews-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Review</p>
        <p>Remove</p>
      </div>
      <div className="listReviews-allReviews">
        <hr />
        {allReviews.map((review, index) => {
          return (
            <React.Fragment key={index}>
              <div className="listReviews-format-main listReviews-format">
                <p>{review.name}</p>
                <p>{review.email}</p>
                <p>{review.review}</p>
                <img
                  onClick={() => removeReview(review._id)}
                  className="listReviews-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListReviews;
