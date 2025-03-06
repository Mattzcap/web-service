import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const AdList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AdItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.isExpired ? "#ffe6e6" : "white")};
  color: ${(props) => (props.isExpired ? "#d32f2f" : "black")};
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ReadOnlyInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: not-allowed;
`;

export default function UploadsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [ads, setAds] = useState([
    { client: 'ABC Corp', file: 'ad1.jpg', location: 'New York', schedule: '2025-03-01 10:00', expiry: '2025-03-10 23:59' },
    { client: 'XYZ Ltd', file: 'ad2.png', location: 'Los Angeles', schedule: '2025-03-05 15:30', expiry: '2025-03-15 23:59' },
    { client: 'ABC Corp', file: 'ad3.gif', location: 'Chicago', schedule: '2025-03-10 12:00', expiry: '2025-03-20 23:59' },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date()); // Keep updating time to track expiry in real-time
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const filteredAds = ads.filter(ad => 
    ad.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  return (
    <Container>
      <Header>
        <h1 style={{ marginLeft: '20px' }}>Uploaded Advertisements</h1>
      </Header>

      <Card>
        <SearchInput
          type="text"
          placeholder="Search by Client Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h3>List of Uploaded Ads</h3>
        <AdList>
          {filteredAds.map((ad, index) => {
            const isExpired = new Date(ad.expiry) < currentDate;
            return (
              <AdItem key={index} isExpired={isExpired} onClick={() => handleAdClick(ad)}>
                <span><strong>{ad.client}</strong></span>
                <span>{ad.file}</span>
                <span>{ad.location}</span>
                <span><strong>Start:</strong> {ad.schedule}</span>
                <span><strong>Expiry:</strong> {ad.expiry}</span>
              </AdItem>
            );
          })}
        </AdList>
      </Card>

      {selectedAd && (
        <Card>
          <h3>Advertisement Details</h3>
          <ReadOnlyInput type="text" value={selectedAd.client} readOnly />
          <ReadOnlyInput type="text" value={selectedAd.file} readOnly />
          <ReadOnlyInput type="text" value={selectedAd.location} readOnly />
          <ReadOnlyInput type="text" value={selectedAd.schedule} readOnly />
          <ReadOnlyInput type="text" value={selectedAd.expiry} readOnly />
        </Card>
      )}
    </Container>
  );
}
