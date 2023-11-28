// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage, handlePageSizeChange, pageSize }) => {
  const getPageOptions = () => {
    const pageOptions = [];
    for (let i = 1; i <= totalPages; i++) {
      pageOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return pageOptions;
  };

  return (
    <div className="mt-3">
      <button className="btn btn-outline-primary mr-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button className="btn btn-outline-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>

      <span className="ml-3">
        Page
        <select value={currentPage} onChange={(e) => handlePageSizeChange(e)}>
          {getPageOptions()}
        </select>
        of {totalPages}
      </span>

      <div className="form-group ml-3" style={{ width: '150px' }}>
        <label htmlFor="pageSize">Items per Page: </label>
        <select id="pageSize" className="form-control" value={pageSize} onChange={handlePageSizeChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
