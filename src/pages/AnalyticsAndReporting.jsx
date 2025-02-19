import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import "../styles/AnalyticsAndReporting.css";
import { Card, CardContent } from "../components/ui/Card";

const revenueData = [
  { name: 'Jan', revenue: 12000 },
  { name: 'Feb', revenue: 15000 },
  { name: 'Mar', revenue: 18000 },
  { name: 'Apr', revenue: 22000 },
  { name: 'May', revenue: 25000 },
];

const weeklyTrends = [
  { name: 'Week 1', revenue: 30000 },
  { name: 'Week 2', revenue: 32000 },
  { name: 'Week 3', revenue: 29000 },
  { name: 'Week 4', revenue: 34000 },
];

const yearlyTrends = [
  { name: '2020', revenue: 150000 },
  { name: '2021', revenue: 180000 },
  { name: '2022', revenue: 200000 },
  { name: '2023', revenue: 220000 },
];

const engagementTrends = [
    { name: 'Mon', views: 4000, clicks: 2400 },
    { name: 'Tue', views: 3000, clicks: 2210 },
    { name: 'Wed', views: 5000, clicks: 2290 },
    { name: 'Thu', views: 4780, clicks: 2000 },
    { name: 'Fri', views: 5890, clicks: 2181 },
    { name: 'Sat', views: 4390, clicks: 2500 },
    { name: 'Sun', views: 4490, clicks: 2100 },
  ];

export default function AnalyticsAndReporting() {
  return (
    <div className="analytics-container">
      <header className="analytics-header">
        <h1>Analytics & Reporting</h1>
      </header>

      {/* Engagement Trends */}
      <Card className="analytics-card">
        <CardContent>
          <h2>Engagement Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={3} />
              <Line type="monotone" dataKey="clicks" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>      


      {/* Weekly Revenue Trends */}
      <Card className="analytics-card">
        <CardContent>
          <h2>Weekly Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#ff9800" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>



      {/* Monthly Revenue Reports */}
      <Card className="analytics-card">
        <CardContent>
          <h2>Monthly Revenue Reports</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>


      {/* Yearly Revenue Trends */}
      <Card className="analytics-card">
        <CardContent>
          <h2>Yearly Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2196f3" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
