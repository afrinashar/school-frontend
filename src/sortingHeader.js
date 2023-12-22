// SortingHeader.jsx
import React from 'react';

const SortingHeader = ({ column, onSort, sortOrder, sortColumn }) => {
  const handleSort = () => {
    onSort(column, sortColumn === column ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc');
  };

  const isSorted = column === sortColumn;
  const arrow = isSorted ? (sortOrder === 'asc' ? '↑' : '↓') : '';

  return (
    <th>
      <button onClick={handleSort} className="btn btn-link">
        {column} {arrow}
      </button>
    </th>
  );
};

export default SortingHeader;
