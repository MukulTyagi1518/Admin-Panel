// 
import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";
import "./preOrderQueries.scss";

export default function PreOrderQueries() {
  const [queries, setQueries] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/preorder-queries");
        console.log("Fetched queries:", res.data); // ✅ Confirm it's an array

        // Check if the response is an array or object
        if (Array.isArray(res.data)) {
          setQueries(res.data);
        } else if (Array.isArray(res.data.data)) {
          setQueries(res.data.data);
        } else {
          console.error("Unexpected API format:", res.data);
        }
      } catch (err) {
        console.error("Error fetching preorder queries:", err);
      }
    };

    fetchQueries();
  }, []);

  const handleReplySubmit = async (id) => {
    if (!replyText.trim()) return;

    try {
      await axios.put(`http://localhost:5000/api/preorder-queries/${id}/reply`, {
        reply: replyText,
        status: "Replied",
      });

      // Update state
      setQueries((prev) =>
        prev.map((q) =>
          q._id === id ? { ...q, reply: replyText, status: "Replied" } : q
        )
      );

      setReplyText("");
      setEditingId(null);
    } catch (err) {
      console.error("Failed to submit reply:", err);
    }
  };

  return (
    <div className="productQueriesBox ma10">
      <div className="allCustomersLowerBox productQueries">
        <div className="allCustomersLowerHeader">
          <p className="customersText">Preorder Queries</p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Question</th>
                <th>Reply</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(queries) && queries.length > 0 ? (
                queries.map((query, index) => (
                  <tr key={query._id}>
                    <td>{index + 1}</td>
                    <td>{query.userName}</td>
                    <td className="prodNameQuery">{query.productName}</td>
                    <td className="prodNameQuery">{query.question}</td>

                    <td className="prodNameQuery">
                      {editingId === query._id ? (
                        <div>
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="replyTextArea"
                          />
                          <button
                            className="saveReplyBtn"
                            onClick={() => handleReplySubmit(query._id)}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        query.reply || "Not replied yet"
                      )}
                    </td>

                    <td>
                      <span
                        className={
                          query.reply
                            ? "badge badgeVerified"
                            : "badge"
                        }
                      >
                        {query.reply ? "Replied" : "Not Replied"}
                      </span>
                    </td>

                    <td>
                      <div
                        className="action"
                        onClick={() => {
                          setEditingId(query._id);
                          setReplyText(query.reply || "");
                        }}
                        title="Reply"
                      >
                        <Eye color="blue" size={18} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No queries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
