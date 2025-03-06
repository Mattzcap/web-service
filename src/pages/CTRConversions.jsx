import { useState } from "react";
import styled from "styled-components";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/CTRConversions.css";

const Container = styled.div`
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
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

export default function CTRConversions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [ctrData, setCtrData] = useState([
    { client: "ABC Corporation", file: "ad1.jpg", views: 5000, clicks: 250, ctr: "5%", conversions: 20 },
    { client: "XYZ Ltd.", file: "ad2.png", views: 8000, clicks: 400, ctr: "5%", conversions: 35 },
  ]);
  
  const [selectedCTR, setSelectedCTR] = useState(null);

  const filteredData = ctrData.filter(data => 
    data.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (data) => {
    setSelectedCTR(data);
  };

  return (
    <Container>
      <Header>
        <h1>CTR & Conversions</h1>
        <TrendingUp size={32} />
      </Header>
      
      <SearchInput
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Card>
        <h3>CTR & Conversions Data</h3>
        <Table>
          <thead>
            <tr>
              <Th>Client Name</Th>
              <Th>File Name</Th>
              <Th>Views</Th>
              <Th>Clicks</Th>
              <Th>CTR</Th>
              <Th>Conversions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index} onClick={() => handleRowClick(data)}>
                  <Td>{data.client}</Td>
                  <Td>{data.file}</Td>
                  <Td>{data.views}</Td>
                  <Td>{data.clicks}</Td>
                  <Td>{data.ctr}</Td>
                  <Td>{data.conversions}</Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="6" style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
                  No data matches your search.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>

      {selectedCTR && (
        <Card>
          <h3>CTR & Conversions Details</h3>
          <ReadOnlyInput type="text" value={selectedCTR.client} readOnly />
          <ReadOnlyInput type="text" value={selectedCTR.file} readOnly />
          <ReadOnlyInput type="text" value={selectedCTR.views} readOnly />
          <ReadOnlyInput type="text" value={selectedCTR.clicks} readOnly />
          <ReadOnlyInput type="text" value={selectedCTR.ctr} readOnly />
          <ReadOnlyInput type="text" value={selectedCTR.conversions} readOnly />
        </Card>
      )}
    </Container>
  );
}
