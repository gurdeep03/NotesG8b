import React from "react";
import "./Search.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
