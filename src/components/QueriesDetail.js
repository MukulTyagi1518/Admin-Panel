import React from "react";

export default function QueriesDetail() {
  return (
    <section className="p-4 max-w-7xl mx-auto">
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Not found</h2>

        <div className="flex items-start gap-4 mb-4">
          <img
            src="https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/3TyxVWOTJKbA5JNIJMwlacIiZqGp3nFJMzQr8L1F.webp"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Arnulfo T. Lucky</h3>
            <p className="text-m text-gray-500">2 months ago</p>
          </div>
        </div>

        <p className="text-m font-medium text-gray-800 mb-6">
          Suitable for entrepreneurs launching a new store, established businesses
          migrating to digital platforms, or companies expanding their online reach.
        </p>

        <textarea
          placeholder="Type your reply"
          className="w-full border rounded-md p-3 resize-none text-sm text-gray-700 h-24"
        ></textarea>

        <div className="mt-4 text-right">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
