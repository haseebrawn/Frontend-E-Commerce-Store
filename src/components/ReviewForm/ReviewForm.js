import React, { useState } from "react";
import axios from "axios";
import "./ReviewForm.css"; // Import your CSS file
import { Row, Col } from "react-bootstrap";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    title: "",
    review: "",
    media: null,
    mediaPreview: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        media: file,
        mediaPreview: previewUrl,
      });
    } else {
      setFormData({
        ...formData,
        media: null,
        mediaPreview: null,
      });
    }
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({
      ...formData,
      rating: ratingValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = new FormData();
    reviewData.append('name', formData.name);
    reviewData.append('email', formData.email);
    reviewData.append('rating', formData.rating);
    reviewData.append('title', formData.title);
    reviewData.append('review', formData.review);
    if (formData.media) {
      reviewData.append('media', formData.media);
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_PORT}/api/product/reviews`, reviewData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        rating: 0,
        title: "",
        review: "",
        media: null,
        mediaPreview: null,
      });

    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="review-container">
      <div className="review-summary">
      <div className="review-title">
      <h2>Customer Reviews</h2>
      </div>
   
       <Row>
        <Col lg={2}> 
        <div className="average-rating">
            <span>⭐⭐⭐⭐⭐</span> <br />
            <span>Based on 6 reviews</span>
        </div>
        </Col>
        <Col lg={4}>
        <div className="rating-overview">
          <div className="rating-breakdown">
            {/* Replace this with a loop to dynamically generate based on data */}
            <div><span>⭐⭐⭐⭐⭐</span> <span>83% (5)</span></div>
            <div><span>⭐⭐⭐⭐⭐</span> <span>17% (1)</span></div>
            <div><span>⭐⭐⭐⭐⭐</span> <span>0% (0)</span></div>
            <div><span>⭐⭐⭐⭐⭐</span> <span>0% (0)</span></div>
            <div><span>⭐⭐⭐⭐⭐</span> <span>0% (0)</span></div>
          </div>
        </div>
        </Col>
        <Col lg={6}>
        <button className="write-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Cancel Review" : "Write a Review"}
        </button>
        </Col>
       </Row>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="review-form">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Rating</label>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={() => handleRatingChange(star)}
                  />
                  <label htmlFor={`star${star}`} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <label>Review Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Give your review a title"
              required
            />
          </div>
          <div>
            <label>Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Write your comments here"
              required
            />
          </div>
          <label htmlFor="media">Picture/Video (Optional)</label>
          <div className="form-group">
            <div className="file-input-container">
              <input type="file" id="media" name="media" onChange={handleFileChange} className="input-file" />
            </div>
            {formData.mediaPreview && (
              <div className="preview-container">
                {formData.media.type.startsWith("image/") ? (
                  <img src={formData.mediaPreview} alt="Media Preview" />
                ) : (
                  <video src={formData.mediaPreview} controls />
                )}
              </div>
            )}
          </div>
          <div>
            <p className="reviewpara">
              How we use your data: We'll only contact you about the review you
              left, and only if necessary. By submitting your review, you agree to
              Judge.me's terms, privacy and content policies.
            </p>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
