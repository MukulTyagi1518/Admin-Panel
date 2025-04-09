import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AttributeValueInfo() {
  const { id } = useParams();
  const [attributeValue, setAttributeValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const attributeData = {
    1: '1 Ltr',
    2: '2 Ltr',
    3: '5 Ltr',
    4: '10 Ltr',
  };

  useEffect(() => {
    if (id && attributeData[id]) {
      setAttributeValue(attributeData[id]);
      setLoading(false);
    } else if (id) {
      setError('Attribute value not found.');
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center bg-gray-100">Loading attribute information...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center bg-gray-100 text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-8"> {/* Added mt-8 for top margin */}
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h2 className="text-2xl font-semibold mb-6">Attribute Value Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Attribute Value</label>
          <input
            type="text"
            value={attributeValue}
            onChange={(e) => setAttributeValue(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttributeValueInfo;