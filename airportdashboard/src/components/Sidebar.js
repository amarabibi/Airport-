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

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">✈ Airport Admin</div>

      <nav className="sidebar-nav">
        <MenuItem
          icon={<Home size={20} />}
          text="Home"
          onClick={() => setActivePage("home")}
          active={activePage === "home"}
        />

        <MenuItem
          icon={<Info size={20} />}
          text="Flights Info"
          onClick={() => setActivePage("flight")}
          active={activePage === "flight"}
        />

        <MenuItem
          icon={<Plane size={20} />}
          text="Services & Facilities"
          onClick={() => setActivePage("services")}
          active={activePage === "services"}
        />

        <MenuItem
          icon={<Info size={20} />}
          text="Procedures"
          onClick={() => setActivePage("procedures")}
          active={activePage === "procedures"}
        />

        <MenuItem
          icon={<Info size={20} />}
          text="E-complaints"
          onClick={() => setActivePage("e-complaints")}
          active={activePage === "e-complaints"}
        />

        <MenuItem
          icon={<Info size={20} />}
          text="About Us"
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
