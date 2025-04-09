// import React from 'react';
// import './Supports.css'; // Import the CSS file

// function Supports() {
//   return (
//     <div className="container">
//       <div className="product-info">
//         <h1>Anivia Computer Headsets Over Ear Headphones Wired Gaming Headset with Mic for PC Mac PS4 PS5 Xbox One, Stereo Surround Sound, Purple</h1>
//       </div>

//       <div className="question-section">
//         <div className="user-info">
//           <img 
//             src="https://static.vecteezy.com/system/resources/thumbnails/053/630/749/small/a-beautiful-young-business-woman-in-a-suit-and-tie-photo.jpeg" // Replace with the actual image URL
//             alt="User Profile" 
//             className="user-image" 
//           />
//           <div className="user-details">
//             <p className="user-name">Arnulfo T. Lucky</p>
//             <p className="time-ago">4 months ago</p>
//           </div>
//         </div>

//         <div className="question mt-4">
//           <p>Can I change or cancel my order after it has been placed?</p>
//         </div>

//         <div className="reply-section">
//           <textarea placeholder="Type your reply"></textarea>
//           <button className="send-button">Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Supports;
import React, { useEffect, useState } from "react";
import "./Supports.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Supports() {
  const [queryData, setQueryData] = useState(null);
  const [reply, setReply] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  //  Get query ID from URL
  const queryId = new URLSearchParams(location.search).get("id");

  //  Fetch single product query
  useEffect(() => {
    if (queryId) {
      axios
        .get(`http://localhost:5000/api/productquery/${queryId}`)
        .then((res) => {
          setQueryData(res.data.data);
          setReply(res.data.data.reply || "");
        })
        .catch((err) => {
          console.error("Error fetching query", err);
        });
    }
  }, [queryId]);

  //  Handle Reply Submit
  const handleSendReply = () => {
    if (!reply.trim()) return alert("Reply cannot be empty");

    axios
      .put(`http://localhost:5000/api/productquery/${queryId}`, {
        reply,
      })
      .then((res) => {
        alert("Reply sent!");
        navigate("/support"); // Go back to queries list or change as needed
      })
      .catch((err) => {
        console.error("Error sending reply", err);
        alert("Error sending reply");
      });
  };

  if (!queryData) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="product-info">
        <h1>{queryData.productName}</h1>
      </div>

      <div className="question-section">
        <div className="user-info">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/630/749/small/a-beautiful-young-business-woman-in-a-suit-and-tie-photo.jpeg"
            alt="User Profile"
            className="user-image"
          />
          <div className="user-details">
            <p className="user-name">{queryData.userName}</p>
            <p className="time-ago">4 months ago</p>
          </div>
        </div>

        <div className="question mt-4">
          <p>{queryData.question}</p>
        </div>

        <div className="reply-section">
          <textarea
            placeholder="Type your reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <button className="send-button" onClick={handleSendReply}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supports;
