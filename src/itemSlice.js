import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Lemon', 'Peach', 'Berry', 'Kiwi'],
  filteredList: [],
  currentPage: 1,
  itemsPerPage: 5,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredList = state.list.filter(item =>
        item.toLowerCase().includes(searchTerm)
      );
      state.currentPage = 1; // Reset to first page when filtering
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Helper function to get paginated items
export const selectPaginatedItems = (state) => {
  const { filteredList, currentPage, itemsPerPage } = state.items;
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredList.slice(startIndex, startIndex + itemsPerPage);
};

export const { filterItems, setCurrentPage } = itemSlice.actions;
export default itemSlice.reducer;
