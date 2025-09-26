import "../css/NewsletterSection.css"; // Ensure you have the CSS file for styling

export default function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="badge">✨ Exclusive Access</div>
        <h2>Stay Ahead of Investment Opportunities</h2>
        <p>
          Join our exclusive investor network and be the first to know about premium
          real estate opportunities in high-growth markets
        </p>

        <form className="newsletter-form">
          <div className="input-group">
            <span className="icon">📧</span>
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <button type="submit" className="btn-submit">
            Get Updates
          </button>
        </form>

        <p className="note">
          No spam, unsubscribe anytime. Premium opportunities delivered monthly.
        </p>
      </div>
    </section>
  );
}
