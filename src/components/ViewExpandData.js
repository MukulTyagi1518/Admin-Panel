import React from 'react';
import { EyeIcon, Minus, Plus } from "lucide-react";

const ViewExpandData = ({ isExpanded, toggleExpanded }) => {
  return (
    <td className="px-2 py-3 md:hidden">
      <button onClick={toggleExpanded}>
        {isExpanded ? <EyeIcon size={18} color="blue" /> : <EyeIcon size={18} color="blue" />}
      </button>
    </td>
  );
};

export default ViewExpandData;
