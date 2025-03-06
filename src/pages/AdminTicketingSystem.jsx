import React, { useState, useEffect } from "react";
import "../styles/AdminTicketingSystem.css";

const AdminTicketingSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Fetch tickets from backend (mock data for now)
    setTickets([
      { 
        id: 1, 
        name: "John Doe", 
        email: "john@example.com", 
        subject: "Login Issue", 
        message: "I can't log in to my account.", 
        status: "Pending",
        issuedBy: "Customer Support", 
        dateIssued: "2025-02-28 14:30",
        comments: []
      },
      { 
        id: 2, 
        name: "Jane Smith", 
        email: "jane@example.com", 
        subject: "Payment Error", 
        message: "My payment was not processed.", 
        status: "Resolved",
        issuedBy: "Finance Department",
        dateIssued: "2025-02-27 10:15",
        comments: []
      },
    ]);
  }, []);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBack = () => {
    setSelectedTicket(null);
    setComment(""); // Clear comment input when going back
  };

  const handleResolveTicket = () => {
    setTickets(tickets.map(ticket => 
      ticket.id === selectedTicket.id ? { ...ticket, status: "Resolved" } : ticket
    ));
    setSelectedTicket(null);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setTickets(tickets.map(ticket =>
        ticket.id === selectedTicket.id
          ? { ...ticket, comments: [...ticket.comments, comment] }
          : ticket
      ));
      setComment(""); // Clear the input field after submitting
    }
  };

  return (
    <div className="admin-ticketing-container">
      <h2>Admin Ticketing System</h2>
      {!selectedTicket ? (
        <div className="ticket-list">
          <h3>Tickets</h3>
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id} onClick={() => handleSelectTicket(ticket)}>
                <div className="ticket-info">
                  <strong>{ticket.subject}</strong> <br />
                  <span className="ticket-meta">
                    Created by: {ticket.name} | {ticket.dateIssued}
                  </span>
                </div>
                <span className={ticket.status}>{ticket.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="ticket-details">
          <h3>Ticket Details</h3>
          <p><strong>Name:</strong> {selectedTicket.name}</p>
          <p><strong>Email:</strong> {selectedTicket.email}</p>
          <p><strong>Subject:</strong> {selectedTicket.subject}</p>
          <p><strong>Message:</strong> {selectedTicket.message}</p>
          <p><strong>Status:</strong> {selectedTicket.status}</p>
          <p><strong>Issued By:</strong> {selectedTicket.issuedBy}</p>
          <p><strong>Date Issued:</strong> {selectedTicket.dateIssued}</p>

          {/* 📝 Comment Section */}
          <div className="comment-section">
            <h3>Admin Comments</h3>
            <ul className="comment-list">
              {selectedTicket.comments.length > 0 ? (
                selectedTicket.comments.map((cmt, index) => (
                  <li key={index}>{cmt}</li>
                ))
              ) : (
                <li className="no-comments">No comments yet.</li>
              )}
            </ul>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="comment-box"
            />
            <button className="comment-button" onClick={handleAddComment}>Add Comment</button>
          </div>

          {/* Buttons */}
          {selectedTicket.status !== "Resolved" && (
            <button className="resolve-button" onClick={handleResolveTicket}>Mark as Resolved</button>
          )}
          <button className="back-button" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default AdminTicketingSystem;
