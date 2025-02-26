import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { MapPin, Users, CreditCard, Video, Globe } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../styles/DashBoard.css"; // Import the CSS file

const dashboardData = [
  { name: 'Mon', revenue: 4000, impressions: 2400 },
  { name: 'Tue', revenue: 3000, impressions: 2210 },
  { name: 'Wed', revenue: 5000, impressions: 2290 },
  { name: 'Thu', revenue: 4780, impressions: 2000 },
  { name: 'Fri', revenue: 5890, impressions: 2181 },
  { name: 'Sat', revenue: 4390, impressions: 2500 },
  { name: 'Sun', revenue: 4490, impressions: 2100 },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      

      {/* Statistics Cards */}
      <div className="dashboard-cards">
      {[
        { title: "Total Active Taxis", value: "250", icon: <MapPin size={32}  aria-label="Active Taxis" /> },
        { title: "Running Ads", value: "120", icon: <Video size={32}  aria-label="Running Ads" /> },
        { title: "Revenue Generated", value: "$12,500", icon: <CreditCard size={32}  aria-label="Revenue Generated" /> },
      ].map((item, index) => (
        <Card key={index} className="stat-card">
          <CardContent className="stat-card-content">
            <div className="stat-text">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
            {item.icon} {/* White icons applied */}
          </CardContent>
        </Card>
      ))}
      </div>


      {/* Performance Analytics Chart */}
      <div className="analytics-chart">
        <h3>Ad Performance Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff", borderRadius: "6px", padding: "10px" }} />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="impressions" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Management Cards */}
      <div className="management-cards">
        {[
          { title: "Geofencing Zones", description: "Manage ads by location", icon: <Globe size={32}  aria-label="Geofencing Zones" /> },
          { title: "Manage Admin Users", description: "Control system access", icon: <Users size={32}  aria-label="Admin Users" /> },
        ].map((item, index) => (
          <Card key={index} className="management-card">
            <CardContent className="management-card-content">
              <div className="management-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.icon}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
