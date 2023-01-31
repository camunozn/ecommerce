import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="" className="d-flex mb-3">
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search products"
          aria-label="Search"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
