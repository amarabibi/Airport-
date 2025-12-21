import { Home, Plane, Users, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-gray-300 flex flex-col">
      <div className="p-6 text-xl font-bold text-white border-b border-gray-800">
        ✈ Airport Admin
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">
        <MenuItem icon={<Home size={20} />} text="Dashboard" />
        <MenuItem icon={<Plane size={20} />} text="Flights" />
        <MenuItem icon={<Users size={20} />} text="Passengers" />
        <MenuItem icon={<Settings size={20} />} text="Settings" />
      </nav>

      <div className="p-4 border-t border-gray-800">
        <MenuItem icon={<LogOut size={20} />} text="Logout" />
      </div>
    </aside>
  );
}

function MenuItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800 hover:text-white transition">
      {icon}
      <span>{text}</span>
    </div>
  );
}
