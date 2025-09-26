import { useState } from "react";
import "../css/FloorPlans.css"; // Ensure you have the CSS file for styling
import floor1 from "../assets/floor1.jpg";
import floor2 from "../assets/floor2.jpg";
import floor3 from "../assets/floor3.jpg";
import floor4 from "../assets/floor4.jpg";

const floorPlans = [
  floor1, floor2, floor3, floor4
];

export default function FloorPlans() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % floorPlans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + floorPlans.length) % floorPlans.length);
  };

  return (
    <section className="floorplans-section">
      {/* Heading */}
      <div className="heading">
        <h2>
          Floor Plans <span className="highlight">& Property Details</span>
        </h2>
        <p>
          Explore detailed layouts and architectural features that maximize both
          comfort and rental potential.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="carousel">
        <img
          src={floorPlans[current]}
          alt={`Floor Plan ${current + 1}`}
          className="carousel-image"
        />

        {/* Left Button */}
        <button className="nav-btn left" onClick={prevSlide}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>

        {/* Right Button */}
        <button className="nav-btn right" onClick={nextSlide}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="pagination">
          {current + 1} of {floorPlans.length}
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="primary-btn">Request Proforma</button>
        <button className="secondary-btn">View Full Gallery</button>
      </div>
    </section>
  );
}
