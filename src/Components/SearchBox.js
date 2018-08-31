import React from "react";

const SearchBox = ({searchField, SearchChange}) => {
  return (
    <div>
      <input
        type="search"
        className="bg-lightest-blue pa3 ba b--green"
        placeholder="Search Robots"
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox;
