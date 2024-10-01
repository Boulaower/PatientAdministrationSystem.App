import React, { useState } from 'react'; // Import React and useState for state management.

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  // State to store the current search query input by the user.
  const [query, setQuery] = useState('');

  // Function to handle the search when the search button is clicked.
  const handleSearch = () => {
    onSearch(query); // Call the onSearch function passed as a prop, passing the current query.
  };

  return (
    <div>
      {/* Input field for user to type in their search query */}
      <input
        type="text"
        value={query} // Bind input value to the query state.
        onChange={(e) => setQuery(e.target.value)} // Update query state as the user types.
        placeholder="Search patients..." // Placeholder text for the input field.
      />
      {/* Button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application.
