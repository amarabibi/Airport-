import React, { useState } from "react";
import "./Flight.css";

export default function Flights() {
  const [activeTab, setActiveTab] = useState("departures");

  return (
    <div className="flights-page">
      <h1 className="page-title">Flight Information</h1>
      <p className="page-subtitle">Real-time flight status and schedules</p>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by flight number, destination, or airline..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "departures" ? "active" : ""}`}
          onClick={() => setActiveTab("departures")}
        >
          ✈️ Departures
        </button>
        <button
          className={`tab ${activeTab === "arrivals" ? "active" : ""}`}
          onClick={() => setActiveTab("arrivals")}
        >
          🛬 Arrivals
        </button>
      </div>

      {/* Departures Table */}
      {activeTab === "departures" && (
        <div className="flights-table-container">
          <h2 className="table-title">Departures</h2>
          <table className="flights-table">
            <thead>
              <tr className="table-header-row">
                <th className="table-header">Flight</th>
                <th className="table-header">Airline</th>
                <th className="table-header">Destination</th>
                <th className="table-header">Departure</th>
                <th className="table-header">Gate</th>
                <th className="table-header">Status</th>
              </tr>
            </thead>
            <tbody>
              <FlightRow
                flight="PK301"
                airline="PIA"
                destination="Dubai, UAE"
                time="14:30"
                gate="A12"
                status="Boarding"
                statusType="boarding"
              />
              <FlightRow
                flight="EK505"
                airline="Emirates"
                destination="London, UK"
                time="15:45"
                gate="B7"
                status="On Time"
                statusType="ontime"
              />
              <FlightRow
                flight="QR208"
                airline="Qatar Airways"
                destination="Doha, Qatar"
                time="16:20"
                gate="A5"
                status="On Time"
                statusType="ontime"
              />
              <FlightRow
                flight="TK411"
                airline="Turkish Airlines"
                destination="Istanbul, Turkey"
                time="17:00"
                gate="C3"
                status="Delayed"
                statusType="delayed"
              />
              <FlightRow
                flight="SV720"
                airline="Saudia"
                destination="Jeddah, Saudi Arabia"
                time="18:15"
                gate="B2"
                status="On Time"
                statusType="ontime"
              />
              <FlightRow
                flight="BA304"
                airline="British Airways"
                destination="Manchester, UK"
                time="19:30"
                gate="A8"
                status="Check-in"
                statusType="ontime"
              />
            </tbody>
          </table>
        </div>
      )}

      {/* Arrivals Table */}
      {activeTab === "arrivals" && (
        <div className="flights-table-container">
          <h2 className="table-title">Arrivals</h2>
          <table className="flights-table">
            <thead>
              <tr className="table-header-row">
                <th className="table-header">Flight</th>
                <th className="table-header">Airline</th>
                <th className="table-header">Origin</th>
                <th className="table-header">Arrival</th>
                <th className="table-header">Terminal</th>
                <th className="table-header">Status</th>
              </tr>
            </thead>
            <tbody>
              <FlightRow
                flight="EK506"
                airline="Emirates"
                destination="Dubai, UAE"
                time="08:30"
                gate="T1"
                status="Landed"
                statusType="ontime"
              />
              <FlightRow
                flight="QR209"
                airline="Qatar Airways"
                destination="Doha, Qatar"
                time="09:15"
                gate="T1"
                status="On Time"
                statusType="ontime"
              />
              <FlightRow
                flight="TK412"
                airline="Turkish Airlines"
                destination="Istanbul, Turkey"
                time="10:45"
                gate="T2"
                status="Delayed"
                statusType="delayed"
              />
              <FlightRow
                flight="PK302"
                airline="PIA"
                destination="Karachi, Pakistan"
                time="11:30"
                gate="T1"
                status="On Time"
                statusType="ontime"
              />
              <FlightRow
                flight="BA305"
                airline="British Airways"
                destination="London, UK"
                time="13:00"
                gate="T2"
                status="Approaching"
                statusType="boarding"
              />
            </tbody>
          </table>
        </div>
      )}

      {/* Flight Info Cards */}
      <section className="flight-info-section">
        <h2 className="section-title">Need Help?</h2>
        <div className="info-cards">
          <InfoCard
            icon="📞"
            title="Flight Inquiry"
            content="Call +92-0340-4368654 for real-time flight information and assistance."
          />
          <InfoCard
            icon="📧"
            title="Email Support"
            content="Send us your queries at flights@narowalair.com for detailed assistance."
          />
          <InfoCard
            icon="💬"
            title="Live Chat"
            content="Chat with our customer service team 24/7 for immediate support."
          />
        </div>
      </section>
    </div>
  );
}

function FlightRow({
  flight,
  airline,
  destination,
  time,
  gate,
  status,
  statusType,
}) {
  return (
    <tr className="flight-row">
      <td className="flight-cell flight-number">{flight}</td>
      <td className="flight-cell">{airline}</td>
      <td className="flight-cell">{destination}</td>
      <td className="flight-cell">{time}</td>
      <td className="flight-cell">{gate}</td>
      <td className={`flight-cell status-${statusType}`}>{status}</td>
    </tr>
  );
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="help-card">
      <div className="help-icon">{icon}</div>
      <h3 className="help-title">{title}</h3>
      <p className="help-content">{content}</p>
    </div>
  );
}
