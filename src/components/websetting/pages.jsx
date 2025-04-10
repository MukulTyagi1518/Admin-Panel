import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const pages = [
  { id: 1, name: 'Seller Policy Pages', url: 'https://demo.activeitzone.com/ecommerce/sellerpolicy' },
  { id: 2, name: 'Return Policy Page', url: 'https://demo.activeitzone.com/ecommerce/returnpolicy' },
  { id: 3, name: 'Support Policy Page', url: 'https://demo.activeitzone.com/ecommerce/supportpolicy' },
  { id: 4, name: 'Term Conditions Page', url: 'https://demo.activeitzone.com/ecommerce/terms' },
  { id: 5, name: 'Privacy Policy Page', url: 'https://demo.activeitzone.com/ecommerce/privacypolicy' },
  { id: 6, name: 'About us', url: 'https://demo.activeitzone.com/ecommerce/aboutus' },
  { id: 7, name: 'Contact us', url: 'https://demo.activeitzone.com/ecommerce/contact-us' },
];

export default function WebsitePagesTable() {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editaddpage/`); 
  };


  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Website Pages</h2>

      {/* All Pages Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">All Pages</h3>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-full" onClick={() => navigate('/addpage')}>
            Add New Page
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">URL</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, idx) => (
                <tr key={page.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">{page.name}</td>
                  <td className="px-6 py-4 text-blue-600 underline break-all">{page.url}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="p-2 rounded-full bg-blue-100">
                      <Pencil size={18} className="text-blue-500" onClick={handleEdit}/>
                    </button>
                    {page.name === 'About us' && (
                      <button className="p-2 rounded-full bg-red-100">
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
