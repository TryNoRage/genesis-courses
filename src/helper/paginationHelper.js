import React from "react";


function paginationHelper(currentPage,array,itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = array.slice(startIndex, endIndex);

  return visibleItems;
}

export default paginationHelper;
