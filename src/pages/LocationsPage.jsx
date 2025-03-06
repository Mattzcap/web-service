import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../styles/LocationsPage.css";

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
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
  
  &.delete {
    background-color: #dc3545;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default function LocationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    { id: 1, client: "ABC Corporation", name: "New York - Times Square" },
    { id: 2, client: "XYZ Ltd.", name: "Los Angeles - Hollywood Blvd" },
    { id: 3, client: "ABC Corporation", name: "Chicago - Millennium Park" },
    { id: 4, client: "XYZ Ltd.", name: "San Francisco - Golden Gate Bridge" }
  ]);

  const handleDelete = (id) => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const filteredLocations = locations.filter(location => 
    location.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <h1>Locations Assigned</h1>
      </Header>
      
      <SearchInput
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="table-container">
        <h3>Uploaded Locations</h3>
        <Table>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Client Name</Th>
              <Th>Location Name</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <tr key={location.id}>
                  <Td>{index + 1}</Td>
                  <Td>{location.client}</Td>
                  <Td>{location.name}</Td>
                  <Td>
                    <Button className="delete" onClick={() => handleDelete(location.id)}>Delete</Button>
                  </Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="4" style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
                  No locations match your search.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
