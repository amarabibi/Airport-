import React, { useState } from "react";
import "./procedures.css";

export default function Procedures() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="procedures-page">
      <h1 className="page-title">Airport Procedures</h1>
      <p className="page-subtitle">
        Step-by-step guide for smooth travel through Narowal International
        Airport
      </p>

      {/* Quick Guide Cards */}
      <div className="quick-guide-section">
        <h2 className="section-title">Quick Guide</h2>
        <div className="guide-cards">
          <QuickGuideCard
            step="1"
            title="Check-in"
            time="3 hours before"
            description="Arrive early and complete check-in process"
          />
          <QuickGuideCard
            step="2"
            title="Security"
            time="2 hours before"
            description="Pass through security screening"
          />
          <QuickGuideCard
            step="3"
            title="Immigration"
            time="90 mins before"
            description="Complete immigration formalities"
          />
          <QuickGuideCard
            step="4"
            title="Boarding"
            time="30 mins before"
            description="Proceed to gate for boarding"
          />
        </div>
      </div>

      {/* Detailed Procedures */}
      <div className="procedures-section">
        <h2 className="section-title">Detailed Procedures</h2>

        <ProcedureAccordion
          title="Check-in Procedures"
          isExpanded={expandedSection === "checkin"}
          onToggle={() => toggleSection("checkin")}
        >
          <div className="procedure-content">
            <h3>Online Check-in</h3>
            <ul>
              <li>Available 24 hours before departure</li>
              <li>Visit airline website or mobile app</li>
              <li>Enter booking reference and last name</li>
              <li>Select seats and print/download boarding pass</li>
            </ul>

            <h3>Airport Check-in</h3>
            <ul>
              <li>Arrive at least 3 hours before international flights</li>
              <li>Present passport and booking confirmation</li>
              <li>Check baggage at designated counter</li>
              <li>Collect boarding pass and baggage tags</li>
            </ul>

            <div className="important-note">
              <strong>Important:</strong> Gates close 30 minutes before
              departure
            </div>
          </div>
        </ProcedureAccordion>

        <ProcedureAccordion
          title="Security Screening"
          isExpanded={expandedSection === "security"}
          onToggle={() => toggleSection("security")}
        >
          <div className="procedure-content">
            <h3>Before Security</h3>
            <ul>
              <li>Have boarding pass and ID ready</li>
              <li>Remove laptops and liquids from bags</li>
              <li>Remove belts, shoes, and metal items</li>
              <li>Place items in provided trays</li>
            </ul>

            <h3>Prohibited Items</h3>
            <ul>
              <li>Liquids over 100ml (carry-on)</li>
              <li>Sharp objects and weapons</li>
              <li>Flammable materials</li>
              <li>Explosive materials</li>
            </ul>

            <div className="important-note">
              <strong>Tip:</strong> Use TSA-approved locks for checked baggage
            </div>
          </div>
        </ProcedureAccordion>

        <ProcedureAccordion
          title="Immigration & Customs"
          isExpanded={expandedSection === "immigration"}
          onToggle={() => toggleSection("immigration")}
        >
          <div className="procedure-content">
            <h3>Immigration (Departures)</h3>
            <ul>
              <li>Present passport and boarding pass</li>
              <li>Answer officer's questions truthfully</li>
              <li>Use e-gates if eligible</li>
              <li>Retain stamped passport</li>
            </ul>

            <h3>Customs Declaration</h3>
            <ul>
              <li>Declare currency over $10,000</li>
              <li>Declare restricted items</li>
              <li>Complete customs form accurately</li>
              <li>Use "Nothing to Declare" if applicable</li>
            </ul>

            <div className="important-note">
              <strong>Required Documents:</strong> Valid passport, visa (if
              required), return ticket
            </div>
          </div>
        </ProcedureAccordion>

        <ProcedureAccordion
          title="Boarding Process"
          isExpanded={expandedSection === "boarding"}
          onToggle={() => toggleSection("boarding")}
        >
          <div className="procedure-content">
            <h3>At the Gate</h3>
            <ul>
              <li>Arrive at gate 30 minutes before departure</li>
              <li>Listen for boarding announcements</li>
              <li>Board according to your group/zone</li>
              <li>Have boarding pass ready to scan</li>
            </ul>

            <h3>Boarding Groups</h3>
            <ul>
              <li>Priority: Business class, frequent flyers</li>
              <li>Group 1: Families with children, special assistance</li>
              <li>Groups 2-4: Economy passengers by row</li>
            </ul>

            <div className="important-note">
              <strong>Note:</strong> Gates may close 15 minutes before departure
            </div>
          </div>
        </ProcedureAccordion>

        <ProcedureAccordion
          title="Baggage Guidelines"
          isExpanded={expandedSection === "baggage"}
          onToggle={() => toggleSection("baggage")}
        >
          <div className="procedure-content">
            <h3>Checked Baggage</h3>
            <ul>
              <li>Economy: 23kg (50 lbs) per bag</li>
              <li>Business: 32kg (70 lbs) per bag</li>
              <li>Maximum dimensions: 158cm (62 inches)</li>
              <li>Tag your bags with contact information</li>
            </ul>

            <h3>Carry-on Baggage</h3>
            <ul>
              <li>Maximum weight: 7kg (15 lbs)</li>
              <li>Maximum dimensions: 56x36x23cm</li>
              <li>One personal item allowed (purse, laptop bag)</li>
              <li>Must fit in overhead bin</li>
            </ul>

            <div className="important-note">
              <strong>Excess Baggage:</strong> Additional fees apply for
              overweight/oversized bags
            </div>
          </div>
        </ProcedureAccordion>
      </div>

      {/* Help Section */}
      <div className="help-section">
        <h2 className="section-title">Need Assistance?</h2>
        <div className="contact-cards">
          <ContactCard
            icon="📞"
            title="Information Desk"
            info="+92-0340-4368654"
            available="24/7"
          />
          <ContactCard
            icon="📧"
            title="Email Support"
            info="info@narowalair.com"
            available="Response in 24 hrs"
          />
          <ContactCard
            icon="📍"
            title="Help Desks"
            info="Located in all terminals"
            available="Available always"
          />
        </div>
      </div>
    </div>
  );
}

function QuickGuideCard({ step, title, time, description }) {
  return (
    <div className="quick-guide-card">
      <div className="step-number">{step}</div>
      <h3 className="guide-title">{title}</h3>
      <p className="guide-time">{time}</p>
      <p className="guide-description">{description}</p>
    </div>
  );
}

function ProcedureAccordion({ title, isExpanded, onToggle, children }) {
  return (
    <div className="procedure-accordion">
      <button
        className={`accordion-header ${isExpanded ? "expanded" : ""}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isExpanded ? "−" : "+"}</span>
      </button>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
}

function ContactCard({ icon, title, info, available }) {
  return (
    <div className="contact-card">
      <div className="contact-icon">{icon}</div>
      <h3 className="contact-title">{title}</h3>
      <p className="contact-info">{info}</p>
      <p className="contact-available">{available}</p>
    </div>
  );
}
