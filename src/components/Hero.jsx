import React from "react";
import "../css/Hero.css"; // Ensure you have the CSS file for styling
import heroImage from "../assets/banner.jpg"; // update with your actual file name

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">
          Ft.Worth Duplex <br />
          <span className="highlight">Investment</span>
          <br />
          <span className="highlight opportunity">Opportunity</span>
        </h1>

        <p className="hero-subtitle">
          Premium dual-unit property with exceptional ROI potential in{" "}
          <strong>Ft.Worth</strong> growing market
        </p>

        <div className="hero-buttons">
          <button className="btn btn-outline">Request Proforma</button>
          <button className="btn btn-primary">Schedule a Call</button>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <h3>$624,900</h3>
            <p>Investment Price</p>
          </div>
          <div className="stat-card">
            <h3>3.75%</h3>
            <p>Special Rate</p>
          </div>
          <div className="stat-card">
            <h3>High ROI</h3>
            <p>Proven Returns</p>
          </div>
        </div>
      </div>
    </section>
  );
}
