import "../css/InvestmentPackage.css"; // Ensure you have the CSS file for styling

export default function InvestmentPackage() {
  return (
    <section className="package-section">
      <div className="package-container">
        {/* Left Content */}
        <div className="package-content">
          <h2>
            Get Your Complete <span className="highlight">Investment Package</span>
          </h2>
          <p>
            Receive detailed financial projections, property analysis, and financing
            options tailored to your investment goals.
          </p>

          <div className="package-features">
            <div className="feature">
              <div className="icon blue">📩</div>
              <div>
                <h3>Complete Proforma Analysis</h3>
                <p>Detailed ROI calculations and cash flow projections</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon yellow">📞</div>
              <div>
                <h3>Personal Consultation</h3>
                <p>One-on-one call with our investment specialists</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon blue">💼</div>
              <div>
                <h3>Financing Options</h3>
                <p>Pre-qualified financing terms and payment structures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="package-form">
          <form>
            <label>
              Full Name
              <input type="text" placeholder="Enter your full name" required />
            </label>

            <label>
              Email Address
              <input type="email" placeholder="Enter your email address" required />
            </label>

            <label>
              Phone Number
              <input type="tel" placeholder="Enter your phone number" required />
            </label>

            <label>
              Message (Optional)
              <textarea placeholder="Tell us about your investment goals or any specific questions..." />
            </label>

            <button type="submit" className="submit-btn">
              Request Complete Investment Package
            </button>

            <p className="privacy-note">
              We respect your privacy. Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
