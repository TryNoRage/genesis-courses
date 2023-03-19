import { useState } from "react";

function usePagination(array, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = array.slice(startIndex, endIndex);

  function goToPage(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return { visibleItems, goToPage, currentPage };
}

export default usePagination;