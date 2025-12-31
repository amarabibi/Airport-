import React from "react";
import "./services.css";
import imigrationImage from "../assets/imigration-customs.jpg";
import Dining from "../assets/dinning.jpg";
import Business from "../assets/business-lounge.jpg";
import Transportation from "../assets/transportation.jpg";
import special from "../assets/special-assistance.jpg";
import freewifi from "../assets/free-wifi.png";
import prayerRoomImage from "../assets/prayer-room.jpg";
import medicalServiceImage from "../assets/medical-services.jpg";
import playAreaImage from "../assets/pley-area.jpg";
import currencyExchangeImage from "../assets/currency-exchange.jpg";

export default function Services() {
  return (
    <div className="services-page">
      <h1 className="page-title">Services & Facilities</h1>
      <p className="page-subtitle">
        Discover world-class amenities and services at Narowal International
        Airport
      </p>

      {/* Passenger Services */}
      <section className="services-section">
        <h2 className="section-title">Passenger Services</h2>
        <div className="services-grid">
          <ServiceCard
            image={imigrationImage}
            title="Immigration & Customs"
            description="Fast-track immigration services available. Customs declaration assistance for international travelers."
            features={[
              "E-gates available",
              "24/7 service",
              "Multilingual staff",
            ]}
          />
          <ServiceCard
            image={Dining}
            title="Dining & Shopping"
            description="Experience a variety of restaurants, cafes, and duty-free shopping options."
            features={[
              "15+ restaurants",
              "Duty-free shops",
              "Local & international brands",
            ]}
          />
          <ServiceCard
            image={Business}
            title="Business Lounge"
            description="Premium lounges with complimentary Wi-Fi, refreshments, and comfortable seating."
            features={["Free Wi-Fi", "Meeting rooms", "Shower facilities"]}
          />
          <ServiceCard
            image={Transportation}
            title="Transportation"
            description="Easy access to taxis, ride-sharing, car rentals, and airport shuttle services."
            features={["Taxi stands", "Car rental desks", "Hotel shuttles"]}
          />
          <ServiceCard
            image={special}
            title="Special Assistance"
            description="Dedicated support for passengers with reduced mobility and special needs."
            features={[
              "Wheelchair service",
              "Priority boarding",
              "Trained staff",
            ]}
          />
          <ServiceCard
            image={freewifi}
            title="Free Wi-Fi"
            description="High-speed internet access throughout the terminal for all passengers."
            features={[
              "Unlimited access",
              "Fast connection",
              "Coverage everywhere",
            ]}
          />
        </div>
      </section>

      {/* Airport Facilities */}
      <section className="facilities-section">
        <h2 className="section-title">Airport Facilities</h2>
        <div className="facilities-grid">
          <FacilityCard
            title="Prayer Rooms"
            description="Dedicated prayer facilities available in all terminals"
            image={prayerRoomImage}
          />
          <FacilityCard
            title="Medical Services"
            description="24/7 medical center with qualified healthcare professionals"
            image={medicalServiceImage}
          />
          <FacilityCard
            title="Children's Play Area"
            description="Fun and safe play zones for young travelers"
            image={playAreaImage}
          />
          <FacilityCard
            title="Currency Exchange"
            description="Competitive exchange rates for major currencies"
            image={currencyExchangeImage}
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ image, title, description, features }) {
  return (
    <div className="service-card">
      {image && (
        <div className="service-image-container">
          <img src={image} alt={title} className="service-image" />
        </div>
      )}
      <div className="service-card-body">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-bullet">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FacilityCard({ title, description, image }) {
  return (
    <div className="facility-card">
      <div className="facility-image-container">
        <img src={image} alt={title} className="facility-image" />
      </div>
      <div className="facility-content">
        <h3 className="facility-title">{title}</h3>
        <p className="facility-description">{description}</p>
      </div>
    </div>
  );
}
