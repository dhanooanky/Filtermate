import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { selectPaginatedItems, setCurrentPage } from './itemSlice';

/**
 * Displays a list of paginated and filtered items.
 * Uses useSelector to get the paginated items from the Redux store.
 */
const ItemList = () => {
  const dispatch = useDispatch();
  const paginatedItems = useSelector(selectPaginatedItems); // Get paginated items from Redux store
  const { filteredList, currentPage, itemsPerPage } = useSelector(state => state.items);

  // Calculate the total number of pages
  const totalPages = useMemo(() => Math.ceil(filteredList.length / itemsPerPage), [filteredList.length, itemsPerPage]);

  // Handle page change
  const handlePageChange = useCallback((page) => {
    dispatch(setCurrentPage(page));
  }, [dispatch]);

  return (
    <div>
      <ul>
        {paginatedItems.map((item, index) => (
          <Item key={index} name={item} /> // Render each item using the Item component
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
