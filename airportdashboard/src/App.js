import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/services";
import Flights from "./pages/flight";
import Procedures from "./pages/procedures";
import Complaint from "./pages/e-complaints";
import About from "./pages/about";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Dashboard />;
      case "services":
        return <Services />;
      case "flight":
        return <Flights />;
      case "procedures":
        return <Procedures />;
      case "e-complaints":
        return <Complaint />;
      case "about":
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
}
