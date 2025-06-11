




import React, { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react'; // or pass it as prop if you're doing so already

export default function Linkwidgetone() {
  const [title, setTitle] = useState('');
  const [links, setLinks] = useState([{ label: '', url: '' }]);
  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { label: '', url: '' }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://e-commerce-backend-1-0.onrender.com/api/footerlink', {
        title,
        links,
      });
      alert('Links saved successfully!');
    } catch (error) {
      console.error('Error posting link widget data:', error);
      alert('Failed to save link widget.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 ml-4 mr-4">
      <h2 className="text-lg font-semibold mb-4">Link Widget One</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title (Translatable)</label>
        <input
          type="text"
          placeholder="Quick Links"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Links - (Translatable Label)</label>
        {links.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={item.label}
              onChange={(e) => handleChange(index, 'label', e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Link Label"
            />
            <input
              type="text"
              value={item.url}
              onChange={(e) => handleChange(index, 'url', e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Link URL"
            />
            <button
              onClick={() => handleRemoveLink(index)}
              className="text-red-500 hover:text-red-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddLink}
        className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-1.5 rounded mb-4"
      >
        Add New
      </button>

      <div className="text-right mt-3">
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-6 rounded shadow-sm disabled:opacity-60"
        >
          {loading ? 'Saving...' : 'Update'}
        </button>
      </div>
    </div>
  );
}