// Grid Table Component that generates a Grid Table with the input of headers & rows & selection for navigation to details page
import React from "react";
import { useNavigate } from "react-router-dom";

const GridTableSelection = ({ headers, rows, detailsPage, keyName }) => {
  const navigate = useNavigate();

  // Get the index of the key column dynamically
  const keyIndex = headers.indexOf(keyName);

  // we give the detailsPage from Routes of App.jsx to navigate to our 'details-page'
  const goToDetails = (keyValue) => {
    navigate(`/${detailsPage}/details/${keyValue}`);
  }; 

  return (
    <div className="table-container overflow-x-auto">
      <div className="overflow-x-auto max-h-[400px]">
        <table className="custom-table min-w-full table-auto bg-white border border-gray-200 shadow-md">
          <thead className="bg-gray-700 text-white text-xs sticky top-0 z-10">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-3 py-2 text-left font-light">{header}</th>
              ))}
              <th className="px-3 py-2 text-left font-light">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 divide-y divide-gray-200 text-xs">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 border-b">{cell}</td>
                ))}
                <td className="px-4 py-2 border-b">
                  {keyIndex !== -1 && ( 
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-3 rounded"
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