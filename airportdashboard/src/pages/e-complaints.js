import React, { useState } from "react";
import "./e-complaints.css";

export default function Complaints() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flightNumber: "",
    complaintType: "",
    priority: "medium",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to backend
    console.log("Complaint submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        flightNumber: "",
        complaintType: "",
        priority: "medium",
        description: "",
      });
    }, 3000);
  };

  return (
    <div className="complaints-page">
      <h1 className="page-title">E-Complaints</h1>
      <p className="page-subtitle">
        We value your feedback. Submit your complaint and we'll respond within
        24-48 hours.
      </p>

      <div className="complaints-container">
        <div className="complaint-form-section">
          <h2 className="form-title">Submit a Complaint</h2>

          {submitted && (
            <div className="success-message">
              ✓ Your complaint has been submitted successfully! Reference ID: #
              {Math.floor(Math.random() * 100000)}
            </div>
          )}

          <form onSubmit={handleSubmit} className="complaint-form">
            {/* Personal Information */}
            <div className="form-section">
              <h3 className="section-heading">Personal Information</h3>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+92 xxx xxxxxxx"
                  />
                </div>
              </div>
            </div>

            {/* Complaint Details */}
            <div className="form-section">
              <h3 className="section-heading">Complaint Details</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="flightNumber" className="form-label">
                    Flight Number
                  </label>
                  <input
                    type="text"
                    id="flightNumber"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., PK301"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="complaintType" className="form-label">
                    Complaint Category *
                  </label>
                  <select
                    id="complaintType"
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="baggage">Baggage Issues</option>
                    <option value="checkin">Check-in Problems</option>
                    <option value="security">Security Concerns</option>
                    <option value="staff">Staff Behavior</option>
                    <option value="facilities">Facility Issues</option>
                    <option value="delay">Flight Delays</option>
                    <option value="cleanliness">Cleanliness</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="priority" className="form-label">
                  Priority Level *
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="low"
                      checked={formData.priority === "low"}
                      onChange={handleChange}
                    />
                    <span>Low</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      checked={formData.priority === "medium"}
                      onChange={handleChange}
                    />
                    <span>Medium</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      checked={formData.priority === "high"}
                      onChange={handleChange}
                    />
                    <span>High</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                  placeholder="Please provide detailed information about your complaint..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit Complaint
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="info-sidebar">
          <InfoCard
            icon="📊"
            title="Track Your Complaint"
            description="You'll receive a reference ID to track your complaint status online."
          />

          <InfoCard
            icon="⏱️"
            title="Response Time"
            description="We aim to respond to all complaints within 24-48 hours."
          />

          <InfoCard
            icon="📞"
            title="Urgent Issues?"
            description="For urgent matters, call our helpline: +92-0340-4368654"
          />

          <div className="stats-card">
            <h3 className="stats-title">Our Performance</h3>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Resolved Cases</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24hrs</span>
              <span className="stat-label">Avg Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.5/5</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <FAQCard
            question="How long does it take to process a complaint?"
            answer="Most complaints are reviewed within 24 hours and resolved within 48-72 hours depending on complexity."
          />
          <FAQCard
            question="Can I track my complaint status?"
            answer="Yes, you'll receive a reference ID via email which you can use to track your complaint status on our website."
          />
          <FAQCard
            question="What if I'm not satisfied with the resolution?"
            answer="You can escalate your complaint by replying to our response email or calling our customer service hotline."
          />
          <FAQCard
            question="Do I need my flight ticket to submit a complaint?"
            answer="While not mandatory, providing your flight number helps us investigate your complaint more efficiently."
          />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card-small">
      <div className="info-icon-small">{icon}</div>
      <h3 className="info-title-small">{title}</h3>
      <p className="info-description-small">{description}</p>
    </div>
  );
}

function FAQCard({ question, answer }) {
  return (
    <div className="faq-card">
      <h3 className="faq-question">{question}</h3>
      <p className="faq-answer">{answer}</p>
    </div>
  );
}
