import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateFAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add your API logic here
    console.log({ question, answer });

    // Redirect after save
    navigate("/faq");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Add New FAQ</h2>
      <form onSubmit={handleSubmit} className="faqForm">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Question
          </label>
          <input
            type="text"
            placeholder="Enter question"
            className="faqInp px-4 py-2 border rounded-lg w-full"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Answer
          </label>
          <textarea
            placeholder="Enter answer"
            className="faqTxt px-4 py-2 border rounded-lg w-full"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="inpSubBox">
          <input
            type="submit"
            value="Save"
            className="inpSub px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateFAQ;
