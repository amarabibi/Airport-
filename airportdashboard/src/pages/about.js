import React from "react";
import "./about.css";
import airportBuildingImage from "../assets/airplane-taking-off-sunset.jpg";
import terminalImage from "../assets/istockphoto-497417426-612x612.jpg";
import runwayImage from "../assets/photo-1553369728-15ec6971afaf.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img
            src={airportBuildingImage}
            alt="Narowal Airport"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Narowal International Airport</h1>
            <p className="hero-tagline">Connecting Pakistan to the World</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="intro-section">
        <h2 className="section-title">About Us</h2>
        <p className="intro-text">
          Narowal International Airport is a state-of-the-art aviation facility
          serving the vibrant city of Narowal and surrounding regions.
          Established with the vision of enhancing connectivity and promoting
          economic growth, our airport stands as a gateway to international
          destinations while maintaining the highest standards of service,
          safety, and efficiency.
        </p>
        <p className="intro-text">
          Since our inception, we have been committed to providing world-class
          facilities and services to millions of passengers annually. Our modern
          infrastructure, advanced technology, and dedicated team ensure a
          seamless travel experience for all our guests.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-section">
        <div className="mv-card">
          <div className="mv-icon">🎯</div>
          <h3 className="mv-title">Our Mission</h3>
          <p className="mv-text">
            To provide safe, efficient, and customer-centric aviation services
            while fostering economic development and connecting communities
            through world-class air transportation infrastructure.
          </p>
        </div>
        <div className="mv-card">
          <div className="mv-icon">👁️</div>
          <h3 className="mv-title">Our Vision</h3>
          <p className="mv-text">
            To be recognized as the leading airport in the region, setting
            benchmarks in operational excellence, customer satisfaction, and
            sustainable aviation practices.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <FeatureCard
            icon="✈️"
            title="Modern Terminals"
            description="Spacious, well-designed terminals equipped with latest amenities for passenger comfort"
          />
          <FeatureCard
            icon="🛡️"
            title="Advanced Security"
            description="State-of-the-art security systems ensuring the highest level of passenger safety"
          />
          <FeatureCard
            icon="🌍"
            title="International Connectivity"
            description="Direct flights to major destinations across Asia, Europe, and the Middle East"
          />
          <FeatureCard
            icon="⚡"
            title="Efficient Operations"
            description="Quick check-in, immigration, and baggage handling processes"
          />
          <FeatureCard
            icon="🏪"
            title="Shopping & Dining"
            description="Wide variety of retail outlets, restaurants, and duty-free shops"
          />
          <FeatureCard
            icon="♿"
            title="Accessibility"
            description="Comprehensive facilities for passengers with special needs"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-section">
        <h2 className="section-title">Our Impact</h2>
        <div className="stats-grid">
          <StatCard number="5M+" label="Annual Passengers" />
          <StatCard number="50+" label="Destinations" />
          <StatCard number="25+" label="Airlines" />
          <StatCard number="120+" label="Daily Flights" />
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <h2 className="section-title">Our Facilities</h2>
        <div className="gallery-grid">
          <GalleryItem
            image={terminalImage}
            title="Terminal Building"
            description="Modern and spacious terminal facilities"
          />
          <GalleryItem
            image={runwayImage}
            title="Runway Infrastructure"
            description="CAT-III compliant runway system"
          />
          <GalleryItem
            image={airportBuildingImage}
            title="Airport Exterior"
            description="Iconic architecture and design"
          />
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <ValueCard
            icon="🤝"
            title="Customer First"
            description="We prioritize passenger satisfaction in everything we do"
          />
          <ValueCard
            icon="🔒"
            title="Safety & Security"
            description="Uncompromising commitment to the highest safety standards"
          />
          <ValueCard
            icon="💡"
            title="Innovation"
            description="Continuously improving through technology and best practices"
          />
          <ValueCard
            icon="🌱"
            title="Sustainability"
            description="Environmental responsibility in all our operations"
          />
          <ValueCard
            icon="⭐"
            title="Excellence"
            description="Striving for operational excellence in every aspect"
          />
          <ValueCard
            icon="🤲"
            title="Integrity"
            description="Maintaining transparency and ethical conduct"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <ContactInfo
            icon="📍"
            title="Address"
            info="Airport Road, Narowal, Punjab, Pakistan"
          />
          <ContactInfo icon="📞" title="Phone" info="+92-xxx-xxxxxxx" />
          <ContactInfo icon="📧" title="Email" info="info@narowalair.com" />
          <ContactInfo
            icon="🕐"
            title="Operating Hours"
            info="24/7 Operations"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function GalleryItem({ image, title, description }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} className="gallery-image" />
      <div className="gallery-overlay">
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-description">{description}</p>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>
      <h3 className="value-title">{title}</h3>
      <p className="value-description">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="contact-info-card">
      <div className="contact-icon">{icon}</div>
      <h3 className="contact-title">{title}</h3>
      <p className="contact-info">{info}</p>
    </div>
  );
}
