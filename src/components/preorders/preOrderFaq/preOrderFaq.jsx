import { Delete, Edit, Trash } from "lucide-react";
import "./preOrderFaq.scss";
import Switch from "../../Switch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PreOrderFaq() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [editingFaq, setEditingFaq] = useState(null);  // State for the FAQ being edited
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("https://e-commerce-backend-1-0.onrender.com/api/faq");
      setFaqs(res.data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question || !answer) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.post("https://e-commerce-backend-1-0.onrender.com/api/faq", {
        question,
        answer,
      });
      setFaqs((prev) => [res.data, ...prev]);
      setQuestion("");
      setAnswer("");
    } catch (err) {
      console.error("Error adding FAQ:", err);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const res = await axios.put(`https://e-commerce-backend-1-0.onrender.com/api/faq/${id}/status`, {
        status: !currentStatus,
      });
      setFaqs((prev) =>
        prev.map((faq) =>
          faq._id === id ? { ...faq, status: res.data.status } : faq
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Open the modal for editing an FAQ
  const handleEditClick = (faq) => {
    setEditingFaq(faq);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingFaq(null);
    setQuestion("");
    setAnswer("");
  };

  const handleUpdateFaq = async (e) => {
    e.preventDefault();

    if (!question || !answer) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.put(
        `https://e-commerce-backend-1-0.onrender.com/api/faq/${editingFaq._id}`,
        { question, answer }
      );
      setFaqs((prev) =>
        prev.map((faq) =>
          faq._id === editingFaq._id ? { ...faq, question, answer } : faq
        )
      );
      handleCloseModal();
    } catch (err) {
      console.error("Error updating FAQ:", err);
    }
  };

  return (
    <div className="PreOrderFaq ma10">
       <div className="flex justify-end mb-4 mr-6">
  <button
     onClick={() => navigate("/preorder/addfaq")}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    + Add FAQ
  </button>
</div>
      <div className="preOrderFaqBox flex gap-8">
     

        <div className="preOrderFaqLeft w-3/4">
          <div className="preOrderLeftUpper flex justify-between items-center">
            <p className="allFaq text-xl font-semibold">All FAQ</p>
            <input
              type="text"
              placeholder="Type to search...."
              className="searchFaq px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="preOrderLeftLower mt-4">
            <div className="table-container faqTable overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">#</th>
                    <th className="px-4 py-2 border">Question</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((faq, index) => (
                    <tr key={faq._id}>
                      <td className="px-4 py-2 border">{index + 1}</td>
                      <td className="px-4 py-2 border">{faq.question}</td>
                      <td className="px-4 py-2 border">
                        <Switch
                          checked={faq.status}
                          onChange={() => handleToggleStatus(faq._id, faq.status)}
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="actions flex gap-4">
                          <div className="action cursor-pointer" onClick={() => handleEditClick(faq)}>
                            <Edit color="blue" size={18} />
                          </div>
                          <div className="action cursor-pointer">
                            <Trash color="blue" size={18} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {faqs.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No FAQs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="preOrderFaqRight w-/4 mx-auto">
  <div className="preOrderFaqRightHead mb-4">
    <p className="allFaq text-xl font-semibold">Add new FAQ</p>
  </div>

  <form className="faqForm" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter question"
      className="faqInp px-4 py-2 border rounded-lg mb-4 w-full"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
    />
    <textarea
      placeholder="Enter answer"
      className="faqTxt px-4 py-2 border rounded-lg mb-4 w-full"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    />
    <div className="inpSubBox">
      <input type="submit" value="Save" className="inpSub px-6 py-2 bg-blue-500 text-white rounded-lg" />
    </div>
  </form>
</div> */}


      </div>
     

      {/* Modal for Editing FAQ */}
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-8 rounded-lg w-1/3">
            <div className="modal-header flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit FAQ</h2>
              <button onClick={handleCloseModal} className="close-modal text-lg">&times;</button>
            </div>
            <form onSubmit={handleUpdateFaq}>
              <input
                type="text"
                placeholder="Enter question"
                className="faqInp px-4 py-2 border rounded-lg mb-4 w-full"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <textarea
                placeholder="Enter answer"
                className="faqTxt px-4 py-2 border rounded-lg mb-4 w-full"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div className="inpSubBox">
                <input type="submit" value="Update" className="inpSub px-6 py-2 bg-blue-500 text-white rounded-lg" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
