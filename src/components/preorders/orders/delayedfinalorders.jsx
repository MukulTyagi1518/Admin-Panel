// import { BellIcon, Download, Eye, Trash } from "lucide-react"
// import { useState } from "react";

// export default function DelayedFinalPreOrders() {

//     const orders = [
//         {
//             "product": "97 Inch OLED TV",
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCB5jc-BA9Vssr8t7xVACGDG6SIeJGR5ASA&s",
//             "quantity": 1,
//             "preorder_code": "20250111-11261990",
//             "created": "2025-03-26",
//             "price": "$22,008.900",
//             "prepayment": "$999.000",
//             "seller": "Filon Asset Store",
//             "customer": {
//                 "name": "Paul K. Jensen",
//                 "email": "customer@example.com"
//             },
//             "status": "Preorder Requested",
//             "refund": "Refundable"
//         },
//         {
//             "product": "Jessica High Heels",
//             "image": "https://example.com/high-heels.jpg",
//             "quantity": 3,
//             "preorder_code": "20250108-12331937",
//             "created": "2025-03-24",
//             "price": "$808.500",
//             "prepayment": "$50.000",
//             "seller": "Muscle Mart",
//             "customer": {
//                 "name": "Arnulfo T. Lucky",
//                 "email": "customer1@example.com"
//             },
//             "status": "Refunded",
//             "refund": "Refundable"
//         },
//         {
//             "product": "Wireless Headphones",
//             "image": "https://example.com/headphones.jpg",
//             "quantity": 2,
//             "preorder_code": "20250112-11456789",
//             "created": "2025-03-20",
//             "price": "$299.000",
//             "prepayment": "$30.000",
//             "seller": "AudioTech Ltd.",
//             "customer": {
//                 "name": "Sarah P. Blake",
//                 "email": "customer2@example.com"
//             },
//             "status": "Shipped",
//             "refund": "Non-Refundable"
//         },
//         {
//             "product": "Gaming Laptop",
//             "image": "https://example.com/gaming-laptop.jpg",
//             "quantity": 1,
//             "preorder_code": "20250109-98765432",
//             "created": "2025-03-18",
//             "price": "$2,499.000",
//             "prepayment": "$200.000",
//             "seller": "TechWorld",
//             "customer": {
//                 "name": "James T. Howard",
//                 "email": "customer3@example.com"
//             },
//             "status": "Processing",
//             "refund": "Refundable"
//         },
//         {
//             "product": "Smartphone 5G",
//             "image": "https://example.com/smartphone.jpg",
//             "quantity": 1,
//             "preorder_code": "20250107-65432100",
//             "created": "2025-03-15",
//             "price": "$999.000",
//             "prepayment": "$100.000",
//             "seller": "Mobile Hub",
//             "customer": {
//                 "name": "Emily R. Carter",
//                 "email": "customer4@example.com"
//             },
//             "status": "Delivered",
//             "refund": "Refundable"
//         }
//     ]


//  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//     const [roleToDelete, setRoleToDelete] = useState(null);
//   const handleDeleteClick = (roleId) => {
//       setRoleToDelete(roleId);
//       setShowDeleteConfirmation(true);
//     };
  
//     const confirmDelete = () => {
//       // Implement your delete logic here
//       console.log(`Deleting role with ID: ${roleToDelete}`);
//       setShowDeleteConfirmation(false);
//       setRoleToDelete(null);
//     };
  
//     const cancelDelete = () => {
//       setShowDeleteConfirmation(false);
//       setRoleToDelete(null);
//     };
  


//     return (
//         <div className="p-[.5cm] " >
//             <div className="border border-gray rounded-[10px] ">


//                 <p className="text-[18px] px-[.5cm] " >
//                     All Preorders
//                 </p>




//                 <table className="w-100 p-[.5cm] border border-gray-200 rounded-[10px ] mt-[1cm] ">
//                     <thead>
//                         <tr>
//                             <th>
//                                 <input type="checkbox" />
//                             </th>
//                             <th>Product/Quantity</th>
//                             <th>Preorder Code/Created</th>
//                             <th>Price/Prepayment</th>
//                             <th>Seller</th>
//                             <th>Customer</th>
//                             <th>Status</th>
//                             <th>Refund</th>
//                             <th>Options</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((item, index) => (
//                             <tr key={index} >
//                                 <td><input type="checkbox" /></td>
//                                 <td>
//                                     <div className="flex flex-row gap-[.3cm] " >
//                                         <img src={item.image} className="w-[1.5cm] " alt="" />
//                                         <div className="flex flex-col gap-[.3cm] justify-between " >
//                                             <p className=" font-bold text-xs whitespace-nowrap text-ellipsis w-[1.7cm]  overflow-hidden " >
//                                                 {item.product}
//                                             </p>
//                                             <p className="text-sm text-opacity-40 font-bold text-black " >
//                                                 Qty : {item.quantity}
//                                             </p>

//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div className=" flex flex-col gap-[.3cm] justify-between " >
//                                         <p className=" font-bold text-blue-500 " >
//                                             {item.preorder_code}
//                                         </p>
//                                         <p className="font-bold text-black text-opacity-50 overflow-hidden whitespace-nowrap text-ellipsis  " >
//                                             Created : {item.created}
//                                         </p>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <p>
//                                         {item.price}/{item.prepayment}
//                                     </p>
//                                 </td>
//                                 <td>
//                                     <p className="text-sm text-opacity-70">
//                                         {item.seller}
//                                     </p>
//                                 </td>
//                                 <td>
//                                     <div className="flex flex-col justify-between gap-[.3cm] ">
//                                         <p className="text-sm text-opacity-50 text-black " >
//                                             {item.customer.name}
//                                         </p>
//                                         <p className="text-xs text-black text-opacity-50 " >
//                                             {
//                                                 item.customer.email
//                                             }
//                                         </p>
//                                     </div>
//                                 </td>
//                                 <td >
//                                     <p className={item.status == "Preorder Requested" ? "text-white  bg-[gray] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap " : "text-ellipsis whitespace-nowrap text-white bg-[forestgreen] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] "} >
//                                         {item.status}
//                                     </p>

//                                 </td>
//                                 <td >
//                                     <p className={item.refund == "Non-Refundable" ? "text-white  bg-[red] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap " : "text-ellipsis whitespace-nowrap text-white bg-[forestgreen] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] "} >
//                                         {item.refund}
//                                     </p>

//                                 </td>

//                                 <td>
//                                     <div className=" flex items-center gap-[.2cm] ">
//                                         <div className="p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer ">
//                                             <Eye size={16} color="blue" />
//                                         </div>
//                                         <div className="p-[.2cm] bg-[#e8d8ff] w-fit rounded-[50%] cursor-pointer ">
//                                             <Download size={16} color="blueviolet" />
//                                         </div>
//                                         <div className="p-[.2cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer ">
//                                             <BellIcon size={16} color="orange" />
//                                         </div>
//                                         <div className="p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer ">
//                                             <Trash size={16} color="red" onClick={() => handleDeleteClick(item.id)}/>
//                                         </div>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 {showDeleteConfirmation && (
//         <div className="delete-confirmation-overlay">
//           <div className="delete-confirmation-dialog">
//             <div className="dialog-header">
//               <h2>Delete Confirmation</h2>
//               <button
//                 className="close-dialog-btn"
//                 onClick={cancelDelete}
//               >
//                 X
//               </button>
//             </div>
//             <div className="dialog-content">
//               <p>Are you sure to delete this?</p>
//             </div>
//             <div className="dialog-actions">
//               <button className="cancel-btn" onClick={cancelDelete}>
//                 Cancel
//               </button>
//               <button className="delete-btn" onClick={confirmDelete}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//             </div>
//         </div>
//     )
// }


import { BellIcon, Download, Eye, Trash } from "lucide-react";
import { useState } from "react";
import NotificationConfirmationModal from "../../NotificationConfirmationModal";

export default function DelayedFinalPreOrders() {
  const orders = [
    {
      product: "97 Inch OLED TV",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCB5jc-BA9Vssr8t7xVACGDG6SIeJGR5ASA&s",
      quantity: 1,
      preorder_code: "20250111-11261990",
      created: "2025-03-26",
      price: "$22,008.900",
      prepayment: "$999.000",
      seller: "Filon Asset Store",
      customer: {
        name: "Paul K. Jensen",
        email: "customer@example.com"
      },
      status: "Preorder Requested",
      refund: "Refundable"
    },
    {
      product: "Jessica High Heels",
      image: "https://example.com/high-heels.jpg",
      quantity: 3,
      preorder_code: "20250108-12331937",
      created: "2025-03-24",
      price: "$808.500",
      prepayment: "$50.000",
      seller: "Muscle Mart",
      customer: {
        name: "Arnulfo T. Lucky",
        email: "customer1@example.com"
      },
      status: "Refunded",
      refund: "Refundable"
    },
    {
      product: "Wireless Headphones",
      image: "https://example.com/headphones.jpg",
      quantity: 2,
      preorder_code: "20250112-11456789",
      created: "2025-03-20",
      price: "$299.000",
      prepayment: "$30.000",
      seller: "AudioTech Ltd.",
      customer: {
        name: "Sarah P. Blake",
        email: "customer2@example.com"
      },
      status: "Shipped",
      refund: "Non-Refundable"
    },
    {
      product: "Gaming Laptop",
      image: "https://example.com/gaming-laptop.jpg",
      quantity: 1,
      preorder_code: "20250109-98765432",
      created: "2025-03-18",
      price: "$2,499.000",
      prepayment: "$200.000",
      seller: "TechWorld",
      customer: {
        name: "James T. Howard",
        email: "customer3@example.com"
      },
      status: "Processing",
      refund: "Refundable"
    },
    {
      product: "Smartphone 5G",
      image: "https://example.com/smartphone.jpg",
      quantity: 1,
      preorder_code: "20250107-65432100",
      created: "2025-03-15",
      price: "$999.000",
      prepayment: "$100.000",
      seller: "Mobile Hub",
      customer: {
        name: "Emily R. Carter",
        email: "customer4@example.com"
      },
      status: "Delivered",
      refund: "Refundable"
    }
  ];

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [showNotificationConfirmation, setShowNotificationConfirmation] = useState(false);

  const handleNotificationClick = () => {
    setShowNotificationConfirmation(true);
  };

  const closeNotificationConfirmation = () => {
    setShowNotificationConfirmation(false);
  };

  const sendNotification = () => {
    console.log("Sending notification...");
    setShowNotificationConfirmation(false);
    // Implement your send notification logic here
  };

  const handleDeleteClick = (roleId) => {
    setRoleToDelete(roleId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting role with ID: ${roleToDelete}`);
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setRoleToDelete(null);
  };

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };





  return (
    <div className="p-[.5cm]">
      <div className="border border-gray rounded-[10px]">
        <p className="text-[18px] px-[.5cm]">All Preorders</p>

        <table className="w-100 p-[.5cm] border border-gray-200 rounded-[10px ] mt-[1cm]">
          <thead>
            <tr>
              <th className="hidden max-[1400px]:table-cell"></th>
              <th className="w-[1%]">
      <input type="checkbox" />
    </th>
              <th>Product/Quantity</th>
              <th>Preorder Code/Created</th>
              <th className="max-[1400px]:hidden">Price/Prepayment</th>
              <th className="max-[1400px]:hidden">Seller</th>
              <th className="max-[1400px]:hidden">Customer</th>
              <th className="max-[1400px]:hidden">Status</th>
              <th>Refund</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <>
                <tr key={index} className="border-b">
                  <td className="hidden max-[1400px]:table-cell">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded text-sm font-bold"
                      onClick={() => toggleRow(index)}
                    >
                    
                      {expandedRow === index ? "-" : "+"}
                    </button>
                  </td>
                  <td className="w-[1%]">
    <input type="checkbox" />
  </td>

                  <td>
                    <div className="flex flex-row gap-[.3cm]">
                      <img src={item.image} className="w-[1.5cm]" alt="" />
                      <div className="flex flex-col gap-[.3cm] justify-between">
                        <p className="font-bold text-xs whitespace-nowrap text-ellipsis w-[1.7cm] overflow-hidden">
                          {item.product}
                        </p>
                        <p className="text-sm text-opacity-40 font-bold text-black">
                          Qty : {item.quantity}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex flex-col gap-[.3cm] justify-between">
                      <p className="font-bold text-blue-500">{item.preorder_code}</p>
                      <p className="font-bold text-black text-opacity-50 overflow-hidden whitespace-nowrap text-ellipsis">
                        Created : {item.created}
                      </p>
                    </div>
                  </td>

                  <td className="max-[1400px]:hidden">
                    <p>{item.price}/{item.prepayment}</p>
                  </td>

                  <td className="max-[1400px]:hidden">
                    <p className="text-sm text-opacity-70">{item.seller}</p>
                  </td>

                  <td className="max-[1400px]:hidden">
                    <div className="flex flex-col justify-between gap-[.3cm]">
                      <p className="text-sm text-opacity-50 text-black">
                        {item.customer.name}
                      </p>
                      <p className="text-xs text-black text-opacity-50">
                        {item.customer.email}
                      </p>
                    </div>
                  </td>

                  <td className="max-[1400px]:hidden">
                    <p
                      className={
                        item.status === "Preorder Requested"
                          ? "text-white bg-[gray] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap"
                          : "text-white bg-[forestgreen] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap"
                      }
                    >
                      {item.status}
                    </p>
                  </td>

                  <td>
                    <p
                      className={
                        item.refund === "Non-Refundable"
                          ? "text-white bg-[red] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap"
                          : "text-white bg-[forestgreen] text-xs py-[.1cm] px-[.3cm] border border-gray w-fit rounded-[20px] text-ellipsis whitespace-nowrap"
                      }
                    >
                      {item.refund}
                    </p>
                  </td>

                  <td>
                    <div className="flex items-center gap-[.2cm]">
                      <div className="p-[.2cm] bg-blue-100 w-fit rounded-[50%] cursor-pointer">
                        <Eye size={16} color="blue" />
                      </div>
                      <div className="p-[.2cm] bg-[#e8d8ff] w-fit rounded-[50%] cursor-pointer">
                        <Download size={16} color="blueviolet" />
                      </div>
                      <div className="p-[.2cm] bg-[#fff4e0] w-fit rounded-[50%] cursor-pointer">
                        <BellIcon size={16} color="orange"  onClick={handleNotificationClick} />
                      </div>
                      <div className="p-[.2cm] bg-red-100 w-fit rounded-[50%] cursor-pointer">
                        <Trash size={16} color="red" onClick={() => handleDeleteClick(item.id)} />
                      </div>
                    </div>
                  </td>
                </tr>

                {expandedRow === index && (
                  <tr className="max-[1400px]:table-row hidden">
                    <td colSpan={9}>
                      <div className="p-2 bg-gray-100 rounded-md text-sm flex flex-col gap-1">
                        <p><strong>Price / Prepayment:</strong> {item.price} / {item.prepayment}</p>
                        <p><strong>Seller:</strong> {item.seller}</p>
                        <p><strong>Customer:</strong> {item.customer.name} - {item.customer.email}</p>
                        <p><strong>Status:</strong> {item.status}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {showDeleteConfirmation && (
          <div className="delete-confirmation-overlay">
            <div className="delete-confirmation-dialog">
              <div className="dialog-header">
                <h2>Delete Confirmation</h2>
                <button className="close-dialog-btn" onClick={cancelDelete}>
                  X
                </button>
              </div>
              <div className="dialog-content">
                <p>Are you sure to delete this?</p>
              </div>
              <div className="dialog-actions">
                <button className="cancel-btn" onClick={cancelDelete}>
                  Cancel
                </button>
                <button className="delete-btn" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

<NotificationConfirmationModal
          isOpen={showNotificationConfirmation}
          onClose={closeNotificationConfirmation}
          onConfirm={sendNotification}
        />
      </div>
    </div>
  );
}
