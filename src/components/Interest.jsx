import React from "react";
import "../css/Interest.css"; // Ensure you have the CSS file for styling
import countdown from "../assets/countdown.svg"; // update with your actual file name
export default function InterestRateSection() {
  return (
    <section className="interest-section">
      {/* Limited Time Offer */}
      <div className="offer-badge">
        <span role="img" aria-label="timer"><img src={countdown} alt="Home" className="highlight-icon" /></span>
        Limited Time Offer
      </div>

      {/* Interest Rate */}
      <h2 className="interest-rate">3.75% Interest Rate</h2>
      <p className="interest-desc">
        Secure exceptional financing terms on this premium investment property.
      </p>

      {/* Features */}
      <div className="features">
        <div className="feature-box">
          <span className="checkmark">✔️</span>
          <span>Pre-approved financing</span>
        </div>
        <div className="feature-box">
          <span className="checkmark">✔️</span>
          <span>Competitive terms</span>
        </div>
        <div className="feature-box">
          <span className="checkmark">✔️</span>
          <span>Quick closing process</span>
        </div>
      </div>
    </section>
  );
}
