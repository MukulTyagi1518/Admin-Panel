import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Conversation.css";
import { FaPlus, FaEye, FaTrash } from "react-icons/fa";

const Conversation = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/productconversation");
        setConversations(res.data.data);
      } catch (err) {
        console.error("Error fetching conversations", err);
      }
    };
    fetchConversations();
  }, []);

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/productconversation/${id}`);
      setSelectedConversation(res.data.data);
      setShowModal(true);
    } catch (err) {
      console.error("Error viewing conversation", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this conversation?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/http://localhost:5000/api/productconversation/${id}`);
      setConversations(conversations.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting conversation", err);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Conversations</h2>
      <table className="conversation-table">
        <thead>
          <tr>
            <th className="hide-on-small">#</th>
            <th className="hide-on-small">Date</th>
            <th className="hide-on-small">Title</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map((conversation, index) => (
            <React.Fragment key={conversation._id}>
              <tr className="table-row">
                <td className="hide-on-small">{index + 1}</td>
                <td className="hide-on-small">{conversation.date}</td>
                <td className="hide-on-small">{conversation.title}</td>
                <td>
                  <button onClick={() => toggleRow(conversation._id)} className="expand-btn mr-3">
                    <FaPlus />
                  </button>
                  {conversation.senderName || conversation.sender}
                  {conversation.isNew && <span className="new-badge">new</span>}
                </td>
                <td>{conversation.receiverName || conversation.receiver}</td>
                <td>
                  <button className="icon-btn4 mr-2" onClick={() => handleView(conversation._id)}><FaEye /></button>
                  <button className="icon-btn4 delete-btn4" onClick={() => handleDelete(conversation._id)}><FaTrash /></button>
                </td>
              </tr>

              {expandedRows[conversation._id] && (
                <tr className="expanded-row">
                  <td colSpan="6">
                    <table className="expanded-table">
                      <tbody>
                        <tr>
                          <th className="expanded-th">#</th>
                          <td className="expanded-td">{index + 1}</td>
                        </tr>
                        <tr>
                          <th className="expanded-th">Date</th>
                          <td className="expanded-td">{conversation.date}</td>
                        </tr>
                        <tr>
                          <th className="expanded-th">Title</th>
                          <td className="expanded-td">{conversation.title}</td>
                        </tr>
                        <tr>
                          <th className="expanded-th">Description</th>
                          <td className="expanded-td">{conversation.description}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/*  MODAL for Eye icon view */}
      {showModal && selectedConversation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Conversation Details</h3>
            <p><strong>ID:</strong> {selectedConversation._id}</p>
            <p><strong>Date:</strong> {selectedConversation.date}</p>
            <p><strong>Title:</strong> {selectedConversation.title}</p>
            <p><strong>Description:</strong> {selectedConversation.description || "No Description"}</p>
            <p><strong>Sender:</strong> {selectedConversation.senderName}</p>
            <p><strong>Receiver:</strong> {selectedConversation.receiverName}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversation;
