// app/filterRecords/page.js
'use client';

import { useState } from 'react';

const FilterRecords = () => {
  const [id, setId] = useState('');
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch records based on ID
  const fetchFilteredRecords = async () => {
    if (!id) {
      alert('Please enter an ID');
      return;
    }

    try {
        console.log("Calling ")
      const res = await fetch(`/api/excel?id=${id}`);
      const data = await res.json();

      if (res.ok) {
        setRecords(data);  // Set filtered records to state
        setError(null);     // Reset any previous errors
      } else {
        setError(data.error);  // Show error if no records found
      }
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">Filter Records by ID</h1>

      <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="idInput" className="text-xl text-gray-600">Enter ID:</label>
          <input
            id="idInput"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="text-center mb-6">
        <button
          onClick={fetchFilteredRecords}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Get Records
        </button>
      </div>

      {error && (
        <div className="mb-6 text-red-600 text-center">
          <p>{error}</p>
        </div>
      )}

      {records.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Filtered Records</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md text-sm font-mono">{JSON.stringify(records, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FilterRecords;
