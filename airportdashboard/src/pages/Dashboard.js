export default function Dashboard() {
  return (
    <div className="flex-1 bg-[#0f0f0f] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Airport Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Flights" value="128" />
        <StatCard title="Passengers Today" value="4,560" />
        <StatCard title="Delayed Flights" value="7" />
      </div>

      {/* Flights Table */}
      <div className="bg-black rounded-xl p-6 border border-gray-800">
        <h2 className="text-xl font-semibold mb-4">Live Flights</h2>

        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Flight</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <FlightRow
              flight="PK101"
              from="Lahore"
              to="Dubai"
              status="On Time"
            />
            <FlightRow
              flight="EK202"
              from="Karachi"
              to="London"
              status="Delayed"
            />
            <FlightRow
              flight="QR303"
              from="Islamabad"
              to="Doha"
              status="Boarding"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl p-6">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function FlightRow({ flight, from, to, status }) {
  return (
    <tr className="border-b border-gray-800">
      <td className="py-3">{flight}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td className="text-green-400">{status}</td>
    </tr>
  );
}
