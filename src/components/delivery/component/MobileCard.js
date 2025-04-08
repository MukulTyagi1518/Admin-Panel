import React from 'react';

const MobileCard = ({ partner, expandedCard, toggleCard }) => {
  return (
    <div
      key={partner.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4"
    >
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => toggleCard(partner.id)}
      >
        <div className="flex items-center">
          <img
            src={partner.profilePhoto}
            alt={partner.name}
            className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
          />
          <div>
            <h3 className="font-medium">{partner.name}</h3>
            <p className="text-sm text-gray-600">{partner.phone}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${
            partner.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {partner.status === 'active' ? 'Active' : 'Inactive'}
          </span>
          <svg
            className={`w-5 h-5 ml-2 text-gray-500 transform transition-transform ${
              expandedCard === partner.id ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {expandedCard === partner.id && (
        <div className="px-4 pb-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-xs text-gray-500">Last Active</p>
              <p>{new Date(partner.lastActive).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Rating</p>
              <p className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{partner.rating}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileCard;
