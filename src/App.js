import React from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

/**
 * Main App component that combines the SearchBar and ItemList.
 */
const App = () => {
  return (
    <div className="App">
      <h1>Item Filter Application</h1>
      <SearchBar /> {/* SearchBar component for filtering items */}
      <ItemList /> {/* ItemList component to display filtered items */}
    </div>
  );
};

export default App;
