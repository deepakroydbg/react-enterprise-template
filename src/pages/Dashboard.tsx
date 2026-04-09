const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Welcome back 👋</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,245</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">₹45,000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">320</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-gray-600">
          <li>✅ User John signed up</li>
          <li>💰 Payment received from Alex</li>
          <li>📦 Order #1234 shipped</li>
          <li>⚠️ Server load increased</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;