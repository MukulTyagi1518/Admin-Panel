// import { BellIcon, Download, Trash } from "lucide-react";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import { AiOutlineHistory } from "react-icons/ai";

// export default function SellerWithdrawRequest() {
//   const requests = [
//     {
//       id: "1",
//       date: "2025-02-05 06:18:05",
//       seller: "Filon Asset Store",
//       totalAmountToPay: "$275.540",
//       requestedAmount: "$300.000",
//       message: "gh",
//       status: "Pending",
//     },
//     {
//       id: "2",
//       date: "2025-02-05 06:18:05",
//       seller: "Filon Asset Store",
//       totalAmountToPay: "$275.540",
//       requestedAmount: "$300.000",
//       message: "gh",
//       status: "Pending",
//     },
//     {
//       id: "3",
//       date: "2022-04-27 22:12:20",
//       seller: "Filon Asset Store",
//       totalAmountToPay: "$275.540",
//       requestedAmount: "$10.000",
//       message:
//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
//       status: "Pending",
//     },
//     {
//       id: "4",
//       date: "2022-04-27",
//       seller: "Filon Asset Store",
//       totalAmountToPay: "$275.540",
//       requestedAmount: "$20.000",
//       message:
//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
//       status: "Paid",
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="border border-gray-300 rounded-lg p-4">
//         <p className="text-lg font-normal">Seller Withdraw Request</p>
//         <table className="w-full font-normal border border-gray-200 mt-4">
//           <thead className="font-normal">
//             <tr>
//               <th className="font-normal">#</th>
//               <th className="font-normal">Date</th>
//               <th className="font-normal">Seller</th>
//               <th className="font-normal">Total Amount to Pay</th>
//               <th className="font-normal">Requested Amount</th>
//               <th className="font-normal">Message</th>
//               <th className="font-normal">Status</th>
//               <th className="font-normal">Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.date}</td>
//                 <td>{item.seller}</td>
//                 <td>{item.totalAmountToPay}</td>
//                 <td>{item.requestedAmount}</td>
//                 <td className="truncate max-w-xs">{item.message}</td>
//                 <td>
//                   <span
//                     className={
//                       item.status === "Pending"
//                         ? "text-white bg-purple-500 px-2 py-0.5 rounded-full"
//                         : "text-white bg-green-500 px-2 py-1 rounded-full"
//                     }
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//                 <td>
//                   <div className="flex items-center gap-2">
//                     <div className="p-2 bg-yellow-100 rounded-full cursor-pointer">
//                         <FaMoneyBillWave size={16} color="goldenrod"/>
//                     </div>
//                     <div className="p-2 bg-[#e8d8ff] rounded-full cursor-pointer">
//                       <IoEyeOutline  size={16} color="blueviolet" />
//                     </div>
//                     <div className="p-2 bg-[#fff4e0] rounded-full cursor-pointer">
//                       <AiOutlineHistory size={16} color="orange" />
//                     </div>
                   
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import axios from "axios";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";

export default function SellerWithdrawRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchWithdrawRequests = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/payout-requests"); // Replace with your API URL
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching withdrawal requests:", error);
      }
    };

    fetchWithdrawRequests();
  }, []);

  return (
    <div className="p-4">
      <div className="border border-gray-300 rounded-lg p-4">
        <p className="text-lg font-normal">Seller Withdraw Request</p>
        <table className="w-full font-normal border border-gray-200 mt-4">
          <thead className="font-normal">
            <tr>
              <th className="font-normal">#</th>
              <th className="font-normal">Date</th>
              <th className="font-normal">Seller</th>
              <th className="font-normal">Total Amount to Pay</th>
              <th className="font-normal">Requested Amount</th>
              <th className="font-normal">Message</th>
              <th className="font-normal">Status</th>
              <th className="font-normal">Options</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.sellerName}</td>
                <td>{item.totalAmount}</td>
                <td>{item.requestedAmount}</td>
                <td className="truncate max-w-xs">{item.message}</td>
                <td>
                  <span
                    className={
                      item.status === "Pending"
                        ? "text-white bg-purple-500 px-2 py-0.5 rounded-full"
                        : "text-white bg-green-500 px-2 py-1 rounded-full"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-100 rounded-full cursor-pointer">
                      <FaMoneyBillWave size={16} color="goldenrod" />
                    </div>
                    <div className="p-2 bg-[#e8d8ff] rounded-full cursor-pointer">
                      <IoEyeOutline size={16} color="blueviolet" />
                    </div>
                    <div className="p-2 bg-[#fff4e0] rounded-full cursor-pointer">
                      <AiOutlineHistory size={16} color="orange" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
