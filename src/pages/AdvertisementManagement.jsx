  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import styled from 'styled-components';
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

  const MetricButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(7, 7, 7);
    border-radius: 8px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background-color: rgba(84, 89, 94, 0.1); /* Light hover effect */
    }
  `;

<<<<<<< HEAD
  const Metric = styled.div`
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-align: center;
    background-color: ${(props) => props.bgColor || '#fff'};
  `;

  export default function AdvertisementManagement() {
    const [ads, setAds] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [location, setLocation] = useState('');
    const [schedule, setSchedule] = useState('');
    const navigate = useNavigate();

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

    const handleUploadsNavigation = () => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Uploads" }));
    };
    
    const handleLocationsNavigation = () => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Locations" }));
    };
    
    const handleScheduleNavigation = () => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Schedule & Duration" }));
    };
    
    const handleCTRNavigation = () => {
=======
  // ✅ Correct Sidebar Navigation for Uploads
  const handleUploadsNavigation = () => {
    navigate("/uploadpage"); // Navigate to the main dashboard route
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Uploads" }));
    }, 100);
  };

  // ✅ Correct Sidebar Navigation for Locations
  const handleLocationsNavigation = () => {
    navigate("/locationpage"); // Navigate to the main dashboard route
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Locations" }));
    }, 100);
  };

  const handleScheduleNavigation = () => {
    navigate("/scheduleduration"); // Navigate to the main dashboard route
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "Schedule & Duration" }));
    }, 100);
  };
  
  const handleCTRNavigation = () => {
    navigate("/ctrconversions"); // Navigate to the main dashboard route
    setTimeout(() => {
>>>>>>> f069f43589847282b4b8860fcb744efc19c9c7d3
      window.dispatchEvent(new CustomEvent("updateSidebar", { detail: "CTR & Conversions" }));
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
          <button onClick={handleSubmitAd}>Submit Ad</button>
        </Card>

        <Card>
          <h3>Ad Performance Metrics</h3>
          <MetricsContainer>
            {/* ✅ Updated Uploads Metric to Use the Sidebar Navigation */}
            <Metric bgColor="#d0ebff">
              <MetricButton onClick={handleUploadsNavigation}>
                <Upload size={32} />
                <p>Uploads: {ads.length}</p>
              </MetricButton>
            </Metric>

            {/* ✅ Updated Locations Metric to Use the Sidebar Navigation */}
            <Metric bgColor="#d3f9d8">
              <MetricButton onClick={handleLocationsNavigation}>
                <MapPin size={32} />
                <p>Locations Assigned</p>
              </MetricButton>
            </Metric>

            {/* Schedule & Duration Metric */}
            <Metric bgColor="#fff3cd">
            <MetricButton onClick={handleScheduleNavigation}>
                <Calendar size={32} />
                <p>Schedule & Duration</p>
              </MetricButton>
            </Metric>

            {/* CTR & Conversions Metric */}
            <Metric bgColor="#f8d7da">
            <MetricButton onClick={handleCTRNavigation}>
                <BarChart2 size={32} />
                <p>CTR & Conversions</p>
              </MetricButton>
            </Metric>
          </MetricsContainer>
        </Card>
      </Container>
    );
  }
