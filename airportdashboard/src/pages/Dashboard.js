import React from "react";
import "./Dashboard.css";
import airportImage from "../assets/green-plane-ecofriendly-environment.jpg";
import checkInimage from "../assets/photo-1553369728-15ec6971afaf.jpg";
import Transit from "../assets/The-Importance-of-Proper-Signage-in-Airports-and-Transit-Centers-1.png.webp";
import security from "../assets/airport-security-1600x1066.jpeg";
import luggage from "../assets/tourist-carrying-luggage.jpg";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Narowal International Airport</h1>

      <div className="airport-image-container">
        <img src={airportImage} alt="Airport" className="airport-image" />
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
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard title="Total Flights" value="128" />
        <StatCard title="Passengers Today" value="4,560" />
        <StatCard title="Delayed Flights" value="7" />
      </div>

      {/* Departures Table */}
      <div className="flights-container">
        <h2 className="flights-title">Departures</h2>

        <table className="flights-table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header">Flight</th>
              <th className="table-header">Destination</th>
              <th className="table-header">Departure Time</th>
              <th className="table-header">Gate</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            <FlightRow
              flight="PK301"
              destination="Dubai, UAE"
              time="14:30"
              gate="A12"
              status="Boarding"
            />
            <FlightRow
              flight="EK505"
              destination="London, UK"
              time="15:45"
              gate="B7"
              status="On Time"
            />
            <FlightRow
              flight="QR208"
              destination="Doha, Qatar"
              time="16:20"
              gate="A5"
              status="On Time"
            />
            <FlightRow
              flight="TK411"
              destination="Istanbul, Turkey"
              time="17:00"
              gate="C3"
              status="Delayed"
            />
            <FlightRow
              flight="SV720"
              destination="Jeddah, Saudi Arabia"
              time="18:15"
              gate="B2"
              status="On Time"
            />
            <FlightRow
              flight="BA304"
              destination="Manchester, UK"
              time="19:30"
              gate="A8"
              status="Check-in"
            />
          </tbody>
        </table>
      </div>

      {/* Flight Information Cards */}
      <div className="info-section">
        <h2 className="info-section-title">Flight Information</h2>
        <div className="info-cards-grid">
          <InfoCard
            title="Check-in Information"
            image={checkInimage}
            content="Check-in counters open 3 hours before departure. Online check-in available 24 hours prior to flight."
          />
          <InfoCard
            title="Baggage Allowance"
            image={luggage}
            content="Economy: 23kg, Business: 32kg. Carry-on: 7kg maximum. Additional fees apply for excess baggage."
          />
          <InfoCard
            title="Security Guidelines"
            image={security}
            content="Arrive 3 hours early for international flights. Liquids limited to 100ml containers in clear bags."
          />
          <InfoCard
            title="Transit Information"
            image={Transit}
            content="Transit passengers should follow signs to connecting flights. Minimum connection time: 90 minutes."
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
    </div>
  );
}

function FlightRow({ flight, destination, time, gate, status }) {
  const getStatusClass = (status) => {
    if (status === "Delayed") return "status-delayed";
    if (status === "Boarding") return "status-boarding";
    return "status-ontime";
  };

  return (
    <tr className="flight-row">
      <td className="flight-cell">{flight}</td>
      <td className="flight-cell">{destination}</td>
      <td className="flight-cell">{time}</td>
      <td className="flight-cell">{gate}</td>
      <td className={`flight-cell ${getStatusClass(status)}`}>{status}</td>
    </tr>
  );
}

function InfoCard({ icon, title, content, image }) {
  return (
    <div className="info-card">
      <div className="info-card-image-container">
        <img src={image} alt={title} className="info-card-image" />
      </div>
      <div className="info-card-body">
        <div className="info-card-header">
          <span className="info-card-icon">{icon}</span>
          <h3 className="info-card-title">{title}</h3>
        </div>
        <p className="info-card-content">{content}</p>
      </div>
    </div>
  );
}
