import React, { useState } from 'react';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState(currentPage);

  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () => onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => onPageChange(totalPages);

  const handlePageInput = e => {
    const pageNum = parseInt(e.target.value, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setInputPage(pageNum);
      onPageChange(pageNum);
    } else {
      setInputPage(currentPage);
    }
  };

  return (
    <div className="pagination-controls">
      <button onClick={handleFirstPage} disabled={currentPage === 1}>{'<<'}</button>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>{'<'}</button>
      <input
        type="number"
        value={inputPage}
        onChange={handlePageInput}
        onBlur={() => setInputPage(currentPage)}
      />
      <span> / {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>{'>'}</button>
      <button onClick={handleLastPage} disabled={currentPage === totalPages}>{'>>'}</button>
    </div>
  );
};

export default PaginationControls;
