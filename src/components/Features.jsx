import React from "react";
import "../css/Features.css"; // Ensure you have the CSS file for styling
import { FaHome, FaDollarSign, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Vector from '../assets/Vector.svg'; // adjust the path relative to your file
import Vector1 from '../assets/Vector1.svg'; // adjust the path relative to your file
import Vector2 from '../assets/Vector2.svg'; // adjust the path relative to your file
import Group from '../assets/Group.svg'; // adjust the path relative to your file


export default function HighlightsSection() {
  return (
    <section className="highlights-section">
      <div className="highlights-grid">
        {/* Box 1 */}
        <div className="highlight-box">
        <img src={Vector} alt="Home" className="highlight-icon home-image" />
          <p className="highlight-label">Unit A</p>
          <h3 className="highlight-title">3 Bed / 2.5 Bath | 2-Car Garage</h3>
          <p className="highlight-desc">
            Spacious main unit with modern layout and premium finishes.
          </p>
        </div>

        {/* Box 2 */}
        <div className="highlight-box">
        <img src={Vector} alt="Home" className="highlight-icon home-image" />
          <p className="highlight-label">Unit B</p>
          <h3 className="highlight-title">3 Bed / 2.5 Bath | 2-Car Garage</h3>
          <p className="highlight-desc">
            Comfortable secondary unit perfect for rental income.
          </p>
        </div>

        {/* Box 3 */}
        <div className="highlight-box">
        <img src={Vector1} alt="Home" className="highlight-icon home-image" />
          <p className="highlight-price">$624,900</p>
          <h3 className="highlight-title">₹52,00,000</h3>
          <p className="highlight-desc">
            Competitive pricing with immediate cash flow potential.
          </p>
        </div>

        {/* Box 4 */}
        <div className="highlight-box">
        <img src={Vector2} alt="Home" className="highlight-icon home-image" />
          <p className="highlight-label">Luxury Grade</p>
          <h3 className="highlight-title">Premium Finishes</h3>
          <p className="highlight-desc">
            High-quality materials and modern amenities throughout.
          </p>
        </div>

        {/* Box 5 */}
        <div className="highlight-box single">
        <img src={Group} alt="Home" className="highlight-icon home-image" />
          <p className="highlight-label">High Demand</p>
          <h3 className="highlight-title">Prime Location</h3>
          <p className="highlight-desc">
            Growing Fort Worth market with strong appreciation trends.
          </p>
        </div>
      </div>
    </section>
  );
}
