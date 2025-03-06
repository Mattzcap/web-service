import { useState } from "react";
import styled from "styled-components";
import { CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/ScheduleDuration.css";

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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  ${({ readOnly }) => readOnly && "background-color: #f5f5f5; cursor: not-allowed;"}
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }
`;

export default function ScheduleDuration() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [schedules, setSchedules] = useState([
    { id: 1, client: "ABC Corporation", file: "ad1.jpg", location: "New York", date: "2025-03-01", duration: "10 days" },
    { id: 2, client: "XYZ Ltd.", file: "ad2.png", location: "Los Angeles", date: "2025-03-05", duration: "15 days" },
  ]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [newDuration, setNewDuration] = useState("");

  const handleRowClick = (schedule) => {
    setSelectedSchedule(schedule);
    setNewDuration(schedule.duration);
  };

  const handleUpdateDuration = () => {
    if (selectedSchedule && newDuration) {
      setSchedules(
        schedules.map((schedule) =>
          schedule.id === selectedSchedule.id
            ? { ...schedule, duration: newDuration }
            : schedule
        )
      );
      setSelectedSchedule(null);
      setNewDuration("");
    }
  };

  const filteredSchedules = schedules.filter(schedule =>
    schedule.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <h1>Schedule & Duration</h1>
        <CalendarCheck size={32} />
      </Header>
      
      <SearchInput
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Card>
        <h3>Scheduled Advertisements</h3>
        <Table>
          <thead>
            <tr>
              <Th>Client Name</Th>
              <Th>File Name</Th>
              <Th>Location</Th>
              <Th>Scheduled Date</Th>
              <Th>Duration</Th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((schedule) => (
                <tr key={schedule.id} onClick={() => handleRowClick(schedule)}>
                  <Td>{schedule.client}</Td>
                  <Td>{schedule.file}</Td>
                  <Td>{schedule.location}</Td>
                  <Td>{schedule.date}</Td>
                  <Td>{schedule.duration}</Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="5" style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
                  No schedules match your search.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>

      {selectedSchedule && (
        <Card>
          <h3>Edit Schedule Duration</h3>
          <Input type="text" value={selectedSchedule.client} readOnly />
          <Input type="text" value={selectedSchedule.file} readOnly />
          <Input type="text" value={selectedSchedule.location} readOnly />
          <Input type="text" value={selectedSchedule.date} readOnly />
          <Input type="text" placeholder="New Duration (e.g., 10 days)" value={newDuration} onChange={(e) => setNewDuration(e.target.value)} />
          <AddButton onClick={handleUpdateDuration}>Update Duration</AddButton>
        </Card>
      )}
    </Container>
  );
}
