import {
  Home,
  Plane,
  Info,
  ClipboardList,
  MessageSquare,
  Users,
  LogOut,
} from "lucide-react";
import "./comp-css.css";
import logo from "../assets/airport-logo.png";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Airport Logo" className="sidebar-logo" />
        <span>Airport Admin</span>
      </div>

      <nav className="sidebar-nav">
        <MenuItem
          icon={<Home size={20} />}
          text="Home"
          onClick={() => setActivePage("home")}
          active={activePage === "home"}
        />
        <MenuItem
          icon={<Plane size={20} />}
          text="Services & Facilities"
          onClick={() => setActivePage("services")}
          active={activePage === "services"}
        />
        <MenuItem
          icon={<Info size={20} />}
          text="Flights Info"
          onClick={() => setActivePage("flights")}
          active={activePage === "flights"}
        />
        <MenuItem
          icon={<ClipboardList size={20} />}
          text="Procedures"
          onClick={() => setActivePage("procedures")}
          active={activePage === "procedures"}
        />
        <MenuItem
          icon={<MessageSquare size={20} />}
          text="E-Complaints"
          onClick={() => setActivePage("complaints")}
          active={activePage === "complaints"}
        />
        <MenuItem
          icon={<Users size={20} />}
          text="About"
          onClick={() => setActivePage("about")}
          active={activePage === "about"}
        />
      </nav>

      <div className="sidebar-footer">
        <MenuItem icon={<LogOut size={20} />} text="Logout" />
      </div>
    </aside>
  );
}

function MenuItem({ icon, text, onClick, active }) {
  return (
    <div
      className={`menu-item ${active ? "menu-item-active" : ""}`}
      onClick={onClick}
    >
      <span className="menu-icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
