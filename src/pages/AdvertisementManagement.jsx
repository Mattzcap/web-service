import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from "../components/ui/Button";
import { Upload, MapPin, Calendar, BarChart2 } from "lucide-react";
import "../styles/AdvertisementManagement.css"; // Import the CSS file

const Container = styled.div`
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MetricsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  width: 150px;
  text-align: center;
  background-color: ${(props) => props.bgColor || '#fff'};
`;

export default function AdvertisementManagement() {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmitAd = () => {
    if (selectedFile && location && schedule) {
      setAds([...ads, { file: selectedFile.name, location, schedule }]);
      setSelectedFile(null);
      setLocation('');
      setSchedule('');
    }
  };

  return (
    <Container>
      <Header>
        <h1>Advertisement Management</h1>
      </Header>

      <Card>
        <h3>Upload New Advertisement</h3>
        <Input type="file" onChange={handleFileUpload} />
        <Input type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Input type="datetime-local" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        <Button onClick={handleSubmitAd}>Submit Ad</Button>
      </Card>

      <Card>
        <h3>Ad Performance Metrics</h3>
        <MetricsContainer>
          <Metric bgColor="#d0ebff">
            <Upload size={32} />
            <p>Uploads: {ads.length}</p>
          </Metric>
          <Metric bgColor="#d3f9d8">
            <MapPin size={32} />
            <p>Locations Assigned</p>
          </Metric>
          <Metric bgColor="#fff3cd">
            <Calendar size={32} />
            <p>Schedule & Duration</p>
          </Metric>
          <Metric bgColor="#f8d7da">
            <BarChart2 size={32} />
            <p>CTR & Conversions</p>
          </Metric>
        </MetricsContainer>
      </Card>
    </Container>
  );
}
