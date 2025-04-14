// import React, { useState } from "react";
// import "./Queries.css";
// import {  FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Queries = () => {
//   const [expandedRows, setExpandedRows] = useState({});
//   const navigate = useNavigate();
//   const toggleRow = (index) => {
//     setExpandedRows((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const data = [
//     { id: 1, user: "Arnulfo T. Lucky", product: "Anivia Computer Headsets Over Ear Headphones", question: "Can I change or cancel my order after it has been placed?", reply: "", status: "Not Replied" },
//     { id: 2, user: "Arnulfo T. Lucky", product: "Premium executive estate with plenty of cargo capacity", question: "How do I know if a product is available in stock?", reply: "", status: "Not Replied" },
//     { id: 3, user: "Arnulfo T. Lucky", product: "Plasticolor 008669R01 Marvel Deadpool Repeater", question: "How do I know if a product is available in stock?", reply: "", status: "Not Replied" },
//     { id: 4, user: "Arnulfo T. Lucky", product: "ZAGG - Pro Keys Wireless Keyboard", question: "What is your return policy?", reply: "", status: "Not Replied" },
//   ];
//   const handlereview = (e) => {
//     e.preventDefault();
//     navigate("/support/supports");
//   };

//   return (
//     <div className="table-container">
//       <h2>Product Queries</h2>
//       <table className="styled-table mt-5">
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>User Name</th>
//             <th>Product Name</th>
//             <th className="hide-on-small">Question</th>
//             <th className="hide-on-small">Reply</th>
//             <th>Status</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <React.Fragment key={item.id}>
//               <tr>
//                 <td> <button className="expand-btn" onClick={() => toggleRow(index)}>+</button></td>
//                 <td>{item.id}</td>
//                 <td>{item.user}</td>
//                 <td>{item.product}</td>
//                 <td className="hide-on-small">{item.question}</td>
//                 <td className="hide-on-small">{item.reply || "—"}</td>
//                 <td>
//                   <span className="status">{item.status}</span>
//                 </td>
//                 <td>
                 
//                    <button className="icon-btn" onClick={handlereview}><FaEye /></button>
//                 </td>
//               </tr>
//               {expandedRows[index] && (
//                 <tr className="expand-row">
//                   <td colSpan="7">
//                     <strong>Question:</strong> {item.question} <br />
//                     <strong>Reply:</strong> {item.reply || "—"}
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Queries;



// import React, { useState, useEffect } from "react";
// import "./Queries.css";
// import { FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Queries = () => {
//   const [queries, setQueries] = useState([]);
//   const [expandedRows, setExpandedRows] = useState({});
//   const navigate = useNavigate();

//   // 🔽 Fetch queries from API
//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/productquery");
//         setQueries(res.data.data);
//       } catch (err) {
//         console.error("Error fetching queries:", err);
//       }
//     };
//     fetchQueries();
//   }, []);

//   const toggleRow = (index) => {
//     setExpandedRows((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   // 🔁 Reply handler (PUT API)
//   const handleReply = async (id) => {
//     const reply = prompt("Enter your reply:");
//     if (!reply || reply.trim() === "") return alert("Reply cannot be empty");

//     try {
//       const res = await axios.put(`http://localhost:5000/api/productquery/${id}`, {
//         reply,
//       });

//       // 🔄 Refresh updated list
//       const updatedQueries = queries.map((q) =>
//         q._id === id ? res.data.data : q
//       );
//       setQueries(updatedQueries);
//       alert("Reply submitted!");
//     } catch (err) {
//       console.error("Error updating reply:", err);
//       alert("Error updating reply.");
//     }
//   };

//   return (
//     <div className="table-container">
//       <h2>Product Queries</h2>
//       <table className="styled-table mt-5">
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>User Name</th>
//             <th>Product Name</th>
//             <th className="hide-on-small">Question</th>
//             <th className="hide-on-small">Reply</th>
//             <th>Status</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {queries.map((item, index) => (
//             <React.Fragment key={item._id}>
//               <tr>
//                 <td>
//                   <button className="expand-btn" onClick={() => toggleRow(index)}>+</button>
//                 </td>
//                 <td>{index + 1}</td>
//                 <td>{item.userName}</td>
//                 <td>{item.productName}</td>
//                 <td className="hide-on-small">{item.question}</td>
//                 <td className="hide-on-small">{item.reply || "—"}</td>
//                 <td>
//                   <span className="status">{item.status}</span>
//                 </td>
//                 <td>
//                   <button className="icon-btn" onClick={() => handleReply(item._id)}>
//                     <FaEye />
//                   </button>
//                 </td>
//               </tr>
//               {expandedRows[index] && (
//                 <tr className="expand-row">
//                   <td colSpan="8">
//                     <strong>Question:</strong> {item.question} <br />
//                     <strong>Reply:</strong> {item.reply || "—"}
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Queries;



import React, { useState, useEffect } from "react";
import "./Queries.css";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/productquery");
        setQueries(res.data.data);
      } catch (err) {
        console.error("Error fetching queries:", err);
      }
    };
    fetchQueries();
  }, []);

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  //  Navigate to reply page on Eye icon click
  const handleViewReplyPage = (id) => {
    navigate(`/support/supports?id=${id}`);
  };

  return (
    <div className="table-container">
      <h2>Product Queries</h2>
      <table className="styled-table mt-5">
        {/* <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>User Name</th>
            <th>Product Name</th>
            <th className="hide-on-small">Question</th>
            <th className="hide-on-small">Reply</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((item, index) => (
            <React.Fragment key={item._id}>
              <tr>
                <td>
                  <button className="expand-btn" onClick={() => toggleRow(index)}>+</button>
                </td>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.productName}</td>
                <td className="hide-on-small">{item.question}</td>
                <td className="hide-on-small">{item.reply || "—"}</td>
                <td>
                  <span className="status">{item.status}</span>
                </td>
                <td>
                  <button className="icon-btn" onClick={() => handleViewReplyPage(item._id)}>
                    <FaEye />
                  </button>
                </td>
              </tr>
              {expandedRows[index] && (
                <tr className="expand-row">
                  <td colSpan="8">
                    <strong>Question:</strong> {item.question} <br />
                    <strong>Reply:</strong> {item.reply || "—"}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody> */}
        <thead>
  <tr>
    <th></th>
    <th>#</th>
    <th>User Name</th>
    <th className="hide-on-small">Product Name</th>
    <th className="hide-on-small">Question</th>
    <th className="hide-on-small">Reply</th>
    <th className="hide-on-small">Status</th>
    <th>Options</th>
  </tr>
</thead>
<tbody>
  {queries.map((item, index) => (
    <React.Fragment key={item.id}>
      <tr>
        <td>
          <button className="expand-btn" onClick={() => toggleRow(index)}>+</button>
        </td>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td className="hide-on-small">{item.product}</td>
        <td className="hide-on-small">{item.question}</td>
        <td className="hide-on-small">{item.reply || "—"}</td>
        <td className="hide-on-small">
          <span className="status">{item.status}</span>
        </td>
        <td>
          <button className="icon-btn" onClick={handleViewReplyPage}><FaEye /></button>
        </td>
      </tr>
      {/* {expandedRows[index] && (
        <tr className="expand-row">
          <td colSpan="8">
            <strong>Product Name:</strong> {item.product}<br />
            <strong>Question:</strong> {item.question}<br />
            <strong>Reply:</strong> {item.reply || "—"}<br />
            <strong>Status:</strong> {item.status}
          </td>
        </tr>
      )} */}
        {expandedRows[index] && (
                <tr className="expand-row">
                  <td colSpan="8">
                    <table className="min-w-full bg-gray-100 p-4">
                      <tbody>
                        <tr className="border-b inline-flex">
                          <td className="py-2 px-4 font-semibold">Product Name</td>
                          <td className="py-2 px-4">{item.product}</td>
                        </tr>
                        <tr className="border-b inline-flex">
                          <td className="py-2 px-4 font-semibold">Question</td>
                          <td className="py-2 px-4">{item.question}</td>
                        </tr>
                        <tr className="border-b inline-flex">
                          <td className="py-2 px-4 font-semibold">Reply</td>
                          <td className="py-2 px-4">{item.reply || "—"}</td>
                        </tr>
                        <tr className="inline-flex">
                          <td className="py-2 px-4 font-semibold">Status</td>
                          <td className="py-2 px-4">{item.status}</td>
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
    </div>
  );
};

export default Queries;
