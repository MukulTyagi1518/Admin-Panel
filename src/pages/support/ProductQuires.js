// import React, { useState } from "react";
// import "./ProductQuires.css"; // Ensure you have this CSS file
// import { FaPlus, FaEye, FaTrash } from "react-icons/fa";

// const ProductQuires = () => {
//   const [expandedRows, setExpandedRows] = useState({});

//   const conversationsData = [
//     {
//       id: 1,
//       date: "2025-01-27 11:20:07",
//       title: "Redragon S101 Wired RGB Backlit Gaming Keyboard",
//       sender: "Paul K. Jensen",
//       receiver: "Filon Asset Store",
//       isNew: true,
//     },
//     {
//         id: 2,
//         date: "2025-01-27 11:20:07",
//         title: "Redragon S101 Wired RGB Backlit Gaming Keyboard",
//         sender: "Paul K. Jensen",
//         receiver: "Filon Asset Store",
//         isNew: true,
//       },
    
//     {
//         id: 3,
//         date: "2024-12-12 02:16:47",
//         title: "Women's Plain Dress One Piece for Girls",
//         sender: "Paul K. Jensen",
//         receiver: "William C. Schroyer",
//         isNew: true,
//       },
//       {
//         id: 4,
//         date: "2024-12-12 02:16:47",
//         title: "Women's Plain Dress One Piece for Girls",
//         sender: "Paul K. Jensen",
//         receiver: "William C. Schroyer",
//         isNew: true,
//       },
//       {
//         id: 5,
//         date: "2024-12-12 02:16:47",
//         title: "Women's Plain Dress One Piece for Girls",
//         sender: "Paul K. Jensen",
//         receiver: "William C. Schroyer",
//         isNew: true,
//       },
//       {
//         id: 6,
//         date: "2024-12-12 02:16:47",
//         title: "Women's Plain Dress One Piece for Girls",
//         sender: "Paul K. Jensen",
//         receiver: "William C. Schroyer",
//         isNew: true,
//       },
//       {
//         id: 7,
//         date: "2024-12-12 02:16:47",
//         title: "Women's Plain Dress One Piece for Girls",
//         sender: "Paul K. Jensen",
//         receiver: "William C. Schroyer",
//         isNew: true,
//       },
//   ];

//   const toggleRow = (id) => {
//     setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Conversations</h2>
//       <table className="w-full text-sm text-left text-gray-500">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 hidden md:table-cell">#</th>
//             <th scope="col" className="px-6 py-3 hidden md:table-cell">Date</th>
//             <th scope="col" className="px-6 py-3 hidden md:table-cell">Title</th>
//             <th scope="col" className="px-6 py-3">Sender</th>
//             <th scope="col" className="px-6 py-3">Receiver</th>
//             <th scope="col" className="px-6 py-3">Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {conversationsData.map((conversation) => (
//             <React.Fragment key={conversation.id}>
//               <tr className="bg-white border-b">
//                 <td className="px-6 py-4 hidden md:table-cell">
//                   {conversation.id}
//                 </td>
//                 <td className="px-6 py-4 hidden md:table-cell">
//                   {conversation.date}
//                 </td>
//                 <td className="px-6 py-4 hidden md:table-cell">
//                   {conversation.title}
//                 </td>
//                 <td className="px-6 py-4 flex items-center space-x-2">
//                   {/* Plus Icon for screens <1400px */}
//                   <span className="block hidden xl:hidden">
//                     <button
//                       onClick={() => toggleRow(conversation.id)}
//                       className="text-blue-500 p-1 rounded bg-gray-200 hover:bg-gray-300 mr-2"
//                     >
//                       <FaPlus />
//                     </button>
//                   </span>
//                   {conversation.sender}
//                   {conversation.isNew && (
//                     <span className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
//                       new
//                     </span>
//                   )}
//                 </td>
//                 <td className="px-6 py-4">{conversation.receiver}</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center space-x-2">
//                     {/* Plus Icon for screens <1400px */}
                    
//                     <button className="option-btn">
//                       <FaEye />
//                     </button>
//                     <button className="option-btn text-red">
//                       <FaTrash />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//               {expandedRows[conversation.id] && (
//                 <tr className="bg-gray-50">
//                   <td colSpan="6" className="px-6 py-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <strong>#</strong>: {conversation.id}
//                       </div>
//                       <div>
//                         <strong>Date</strong>: {conversation.date}
//                       </div>
//                       <div>
//                         <strong>Title</strong>: {conversation.title}
//                       </div>
//                     </div>
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

// export default ProductQuires;
import React, { useState } from "react";
import "./Conversation.css";
import { FaPlus, FaEye, FaTrash } from "react-icons/fa";

const Conversation = () => {
  const [expandedRows, setExpandedRows] = useState({});

  const conversationsData = [
    {
      id: 1,
      date: "2025-01-27 11:20:07",
      title: "Redragon S101 Wired RGB Backlit Gaming Keyboard",
      sender: "Paul K. Jensen",
      receiver: "Filon Asset Store",
      isNew: true,
    },
    {
      id: 2,
      date: "2024-12-12 02:16:47",
      title: "Women's Plain Dress One Piece for Girls",
      sender: "Paul K. Jensen",
      receiver: "William C. Schroyer",
      isNew: true,
    },
    {
        id: 3,
        date: "2024-12-12 02:16:47",
        title: "Women's Plain Dress One Piece for Girls",
        sender: "Paul K. Jensen",
        receiver: "William C. Schroyer",
        isNew: true,
      },
      {
        id: 4,
        date: "2024-12-12 02:16:47",
        title: "Women's Plain Dress One Piece for Girls",
        sender: "Paul K. Jensen",
        receiver: "William C. Schroyer",
        isNew: true,
      },
      {
        id: 5,
        date: "2024-12-12 02:16:47",
        title: "Women's Plain Dress One Piece for Girls",
        sender: "Paul K. Jensen",
        receiver: "William C. Schroyer",
        isNew: true,
      },
  ];

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
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
          {conversationsData.map((conversation) => (
            <React.Fragment key={conversation.id}>
              <tr className="table-row">
                <td className="hide-on-small">{conversation.id}</td>
                <td className="hide-on-small">{conversation.date}</td>
                <td className="hide-on-small">{conversation.title}</td>
                <td>
                  <button onClick={() => toggleRow(conversation.id)} className="expand-btn">
                    <FaPlus />
                  </button>
                  {conversation.sender}
                  {conversation.isNew && <span className="new-badge">new</span>}
                </td>
                <td>{conversation.receiver}</td>
                <td>
                  <button className="icon-btn"><FaEye /></button>
                  <button className="icon-btn delete-btn"><FaTrash /></button>
                </td>
              </tr>
              {expandedRows[conversation.id] && (
                <tr className="expanded-row">
                  <td colSpan="6">
                    <table className="expanded-table">
                      <tbody>
                        <tr>
                          <th className="expanded-th">#</th>
                          <td className="expanded-td">{conversation.id}</td>
                        </tr>
                        <tr>
                          <th className="expanded-th">Date</th>
                          <td className="expanded-td">{conversation.date}</td>
                        </tr>
                        <tr>
                          <th className="expanded-th">Title</th>
                          <td className="expanded-td">{conversation.title}</td>
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

export default Conversation;