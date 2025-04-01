import React from "react";
import { useNavigate } from "react-router-dom";

const GridTableSelection = ({ headers, rows, detailsPage, keyName }) => {
  const navigate = useNavigate();

  // Get the index of the key column dynamically
  const keyIndex = headers.indexOf(keyName);

  // Dynamic navigation function
  const goToDetails = (keyValue) => {
    navigate(`/${detailsPage}/details/${keyValue}`); // Use detailsPage dynamically
  };

  return (
    <div className="table-container overflow-x-auto p-4 bg-[#F2F8FF] shadow-lg rounded-lg mb-6">
      <div className="overflow-x-auto max-h-[400px]">
        <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-[#0B9FE3] text-white text-sm sticky top-0 z-10">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left font-medium">{header}</th>
              ))}
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 divide-y divide-gray-200 text-sm">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[#E6F4FB]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 border-b">{cell}</td>
                ))}
                <td className="px-4 py-3 border-b">
                  {keyIndex !== -1 && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded transition-all"
                      onClick={() => goToDetails(row[keyIndex])} 
                    >
                      Select
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
  
};

export default GridTableSelection;