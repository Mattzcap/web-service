import { useState } from "react";
import { MapPin, CheckCircle, XCircle } from "lucide-react";
import "../styles/TaxiFleetManagement.css";
import { Card, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";

const taxiFleetData = [
  { id: 1, driver: "John Doe", location: "Downtown", status: "Online" },
  { id: 2, driver: "Jane Smith", location: "Airport", status: "Offline" },
  { id: 3, driver: "Michael Brown", location: "City Center", status: "Online" },
  { id: 4, driver: "Emily Johnson", location: "Suburbs", status: "Offline" },
];

export default function TaxiFleetManagement() {
  const [taxis, setTaxis] = useState(taxiFleetData);

  return (
    <div className="taxi-fleet-container">
      <header className="taxi-fleet-header">
        <h1>Taxi Fleet Management</h1>
      </header>

      {/* Active Taxis List */}
      <div className="taxi-list">
        {taxis.map((taxi) => (
          <Card key={taxi.id} className="taxi-card">
            <CardContent className="taxi-card-content">
              <div className="taxi-info">
                <h3>Driver: {taxi.driver}</h3>
                <p>Location: {taxi.location}</p>
                <div className="status-indicator">
                  {taxi.status === "Online" ? (
                    <CheckCircle size={20} className="online" />
                  ) : (
                    <XCircle size={20} className="offline" />
                  )}
                  <span>{taxi.status}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time Location Tracking (Placeholder) */}
      <div className="real-time-map">
        <h2>Real-time Location Tracking</h2>
        <div className="map-placeholder">
          <MapPin size={48} />
          <p>Map Integration Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}
