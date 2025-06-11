import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CitiesEdit() {
  const { id } = useParams(); // Extract `id` from the URL
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [cost, setCost] = useState('0');
  const [statesData, setStatesData] = useState([]);
  const [activeTab, setActiveTab] = useState('English');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isStatesLoading, setIsStatesLoading] = useState(true);

  // Fetching unique states from shippingCost list
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://e-commerce-backend-1-0.onrender.com/api/shippingCost/get');
        if (response.data.success && Array.isArray(response.data.data)) {
          const uniqueStates = [
            ...new Set(response.data.data.map((item) => item.state)),
          ];
          setStatesData(uniqueStates);
        } else {
          setStatesData([]);
        }
      } catch (err) {
        setError('Failed to load states');
        setStatesData([]);
        console.error(err.message);
      } finally {
        setIsStatesLoading(false);
      }
    };

    fetchStates();
  }, []);

  //  Fetch existing shipping cost (city) info
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-1-0.onrender.com/api/shippingCost/get/${id}`);
        if (response.data.success) {
          setName(response.data.data.name);
          setState(response.data.data.state);
          setCost(response.data.data.cost);
        }
      } catch (err) {
        setError('Failed to fetch city data');
        console.error(err.message);
      }
    };

    if (id) fetchCity();
  }, [id]);

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.patch(`https://e-commerce-backend-1-0.onrender.com/api/shippingCost/update/${id}`, {
        name,
        state,
        cost,
      });
      if (response.data.success) {
        alert('Shipping cost updated successfully!');
      }
    } catch (err) {
      setError('Failed to update the shipping cost');
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Shipping Cost</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Language Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {['English', 'Bangla', 'Arabic', 'French'].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 ${
                activeTab === lang ? 'border-b-2 border-blue-500' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick(lang)}
            >
              {lang === 'English' && '🇬🇧'}
              {lang === 'Bangla' && '🇧🇩'}
              {lang === 'Arabic' && '🇦🇪'}
              {lang === 'French' && '🇫🇷'} {lang}
            </button>
          ))}
        </div>

        {/* City Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* State Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <select
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select a state</option>
            {isStatesLoading ? (
              <option disabled>Loading states...</option>
            ) : (
              statesData.map((stateItem, index) => (
                <option key={index} value={stateItem}>
                  {stateItem}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Cost */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cost</label>
          <input
            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Updating...' : 'Update'}
        </button>
      </div>
    </div>
  );
}

export default CitiesEdit;
