import React from 'react';

const StateEdit = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 mt-5">State Information</h1>
                <div className="bg-white rounded-lg shadow-md p-8 mt-5">
                    <h1 className="text-2xl font-bold mb-6 mt-4">Edit State</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            value="Andaman and Nicobar Islands"
                            readOnly
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            value="India"
                            readOnly
                        >
                            <option>India</option>
                            <option>India</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Australia</option>
                            <option>United Kingdom</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Japan</option>
                            <option>China</option>
                            <option>Brazil</option>
                            <option>Russia</option>
                            
                        </select>
                    </div>
                    <div className="flex ">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateEdit;