import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice'; // Import the itemSlice reducer

// Configure the Redux store with the itemSlice reducer
const store = configureStore({
  reducer: {
    items: itemReducer, // Registering the item slice under 'items'
  },
});

export default store; // Export the store to use in the app
