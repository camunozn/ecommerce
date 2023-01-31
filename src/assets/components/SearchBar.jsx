import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductByNameThunk } from '../../store/slices/products.slice';

const SearchBar = () => {
  const [productSearch, setProductSearch] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <div className="search-input input-group mb-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search products"
          value={productSearch}
          onChange={e => setProductSearch(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(filterProductByNameThunk(productSearch))}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
