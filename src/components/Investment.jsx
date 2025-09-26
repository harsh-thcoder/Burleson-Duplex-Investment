import "../css/Investment.css";

const benefits = [
  {
    title: "Strong ROI Potential",
    description:
      "Proven rental income with excellent cash flow projections and appreciation potential in Burleson’s growing market.",
  },
  {
    title: "Prime Location Advantage",
    description:
      "Strategic positioning in Burleson’s expanding residential corridor with easy access to Dallas-Fort Worth metro area.",
  },
  {
    title: "Attractive Affordability",
    description:
      "Competitive pricing below market comparable offers immediate equity opportunity and strong entry point.",
  },
  {
    title: "High Rental Demand",
    description:
      "Growing population and limited duplex inventory create strong tenant demand and rental rate stability.",
  },
];

export default function InvestmentSection() {
  return (
    <section className="investment-section">
      {/* Header */}
      <div className="investment-header">
        <h2>
          Why This Investment <span className="highlight">Wins</span>
        </h2>
        <p>
          This <strong>Ft.Worth</strong> duplex combines market timing, location
          advantages, and financial benefits to deliver exceptional investment
          returns
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="investment-grid">
        {benefits.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
                fill="none"
              >
                <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3z" />
              </svg>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Blue Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to Secure Your Investment?</h2>
        <p>
          Join savvy investors who recognize exceptional opportunities when they
          see them
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Download Full Proforma</button>
          <button className="secondary-btn">Schedule Investment Call</button>
        </div>
      </div>
    </section>
  );
}
