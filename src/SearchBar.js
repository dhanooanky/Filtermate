import React from 'react';
import { useDispatch } from 'react-redux';
import { filterItems } from './itemSlice';

/**
 * Input field for filtering items.
 * Dispatches the filterItems action to Redux on input change.
 */
const SearchBar = () => {
  const dispatch = useDispatch();

  // Handle search input change and dispatch filter action
  const handleSearch = (e) => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..." // Placeholder for input field
      onChange={handleSearch} // Handle input changes to filter items
    />
  );
};

export default SearchBar;
