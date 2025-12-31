import React from "react";
import "./Dashboard.css";

import airportImage from "../assets/green-plane-ecofriendly-environment.jpg";
import checkInimage from "../assets/check-in.jpg";
import transit from "../assets/transit.webp";
import security from "../assets/security.jpeg";
import luggage from "../assets/luggage.jpg";

/* ================= STATIC DATA ================= */
const statsData = [
  { title: "Total Flights", value: "128", icon: "✈️" },
  { title: "Passengers Today", value: "4,560", icon: "👥" },
  { title: "Delayed Flights", value: "7", icon: "⏰" },
];

const flightsData = [
  {
    flight: "PK301",
    destination: "Dubai, UAE",
    time: "14:30",
    gate: "A12",
    status: "Boarding",
  },
  {
    flight: "EK505",
    destination: "London, UK",
    time: "15:45",
    gate: "B7",
    status: "On Time",
  },
  {
    flight: "QR208",
    destination: "Doha, Qatar",
    time: "16:20",
    gate: "A5",
    status: "On Time",
  },
  {
    flight: "TK411",
    destination: "Istanbul, Turkey",
    time: "17:00",
    gate: "C3",
    status: "Delayed",
  },
  {
    flight: "SV720",
    destination: "Jeddah, Saudi Arabia",
    time: "18:15",
    gate: "B2",
    status: "On Time",
  },
  {
    flight: "BA304",
    destination: "Manchester, UK",
    time: "19:30",
    gate: "A8",
    status: "Check-in",
  },
];

const infoCardsData = [
  {
    title: "Check-in Information",
    image: checkInimage,
    icon: "✓",
    content:
      "Check-in counters open 3 hours before departure. Online check-in available 24 hours prior to flight.",
  },
  {
    title: "Baggage Allowance",
    image: luggage,
    icon: "🧳",
    content:
      "Economy: 23kg, Business: 32kg. Carry-on: 7kg maximum. Additional fees apply for excess baggage.",
  },
  {
    title: "Security Guidelines",
    image: security,
    icon: "🔒",
    content:
      "Arrive 3 hours early for international flights. Liquids limited to 100ml containers in clear bags.",
  },
  {
    title: "Transit Information",
    image: transit,
    icon: "🔄",
    content:
      "Transit passengers should follow signs to connecting flights. Minimum connection time: 90 minutes.",
  },
];

/* ================= DASHBOARD ================= */
export default function Dashboard() {
  return (
    <main className="dashboard">
      <h1 className="dashboard-title">Narowal International Airport</h1>

      {/* Hero Image */}
      <section
        className="airport-image-container"
        aria-label="Airport overview"
      >
        <img
          src={airportImage}
          alt="Narowal International Airport"
          className="airport-image"
        />
        <div className="image-overlay">
          <div className="overlay-content">
            <h2 className="overlay-title">International Departures</h2>
            <p className="overlay-text">
              Experience seamless travel from Pakistan to destinations
              worldwide. Our state-of-the-art facilities ensure smooth
              departures to UAE, UK, Qatar, Turkey, Saudi Arabia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-grid" aria-label="Airport statistics">
        {statsData.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Departures Table */}
      <section
        className="flights-container"
        aria-label="Live flight departures"
      >
        <h2 className="flights-title">Live Departures</h2>

        <table className="flights-table">
          <thead>
            <tr className="table-header-row">
              <th>Flight</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Gate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flightsData.map((flight) => (
              <FlightRow key={flight.flight} {...flight} />
            ))}
          </tbody>
        </table>
      </section>

      {/* Passenger Information */}
      <section className="info-section" aria-label="Passenger information">
        <h2 className="info-section-title">Passenger Information</h2>
        <div className="info-cards-grid">
          {infoCardsData.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */
function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <span className="stat-icon" aria-hidden="true">
        {icon}
      </span>
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
    </div>
  );
}

function FlightRow({ flight, destination, time, gate, status }) {
  const statusClassMap = {
    Delayed: "status-delayed",
    Boarding: "status-boarding",
    "Check-in": "status-boarding",
    "On Time": "status-ontime",
  };

  return (
    <tr className="flight-row">
      <td className="flight-cell flight-number">{flight}</td>
      <td className="flight-cell">{destination}</td>
      <td className="flight-cell">{time}</td>
      <td className="flight-cell">{gate}</td>
      <td className={`flight-cell ${statusClassMap[status] || ""}`}>
        <span className="status-badge">{status}</span>
      </td>
    </tr>
  );
}

function InfoCard({ icon, title, content, image }) {
  return (
    <article className="info-card">
      <div className="info-card-image-container">
        <img src={image} alt={title} className="info-card-image" />
      </div>
      <div className="info-card-body">
        <div className="info-card-header">
          <span className="info-card-icon" aria-hidden="true">
            {icon}
          </span>
          <h3 className="info-card-title">{title}</h3>
        </div>
        <p className="info-card-content">{content}</p>
      </div>
    </article>
  );
}
