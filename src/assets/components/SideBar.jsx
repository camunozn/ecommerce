import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterProductsByCategoryThunk,
  filterProductsByPriceThunk,
  getProductsThunk,
} from '../../store/slices/products.slice';

const SideBar = () => {
  const categories = useSelector(state => state.categories);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);
  const [minPriceFilter, setMinPriceFilter] = useState(0);

  const dispatch = useDispatch();

  return (
    <aside className="side-bar accordion">
      {/* PRICE FILTER */}
      <div className="filter-price accordion-item mb-3 rounded-0">
        <h3 className="price-header accordion-header">
          <button
            type="button"
            className={`accordion-button rounded-0 ${openPriceFilter ? '' : 'collapsed'}`}
            data-bs-toggle="collapse"
            onClick={() => setOpenPriceFilter(!openPriceFilter)}
          >
            Price
          </button>
        </h3>
        <div className={`price-body accordion-collapse collapse ${openPriceFilter ? 'show' : ''}`}>
          <div className="accordion-body">
            <div className="input-group input-group-sm mb-3">
              <label htmlFor="fromPrice" className="form-label w-25 me-1 mb-0">
                From:
              </label>
              <input
                type="number"
                className="form-control"
                id="fromPrice"
                value={minPriceFilter}
                onChange={e => setMinPriceFilter(e.target.value)}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <label htmlFor="toPrice" className="form-label w-25 me-1 mb-0">
                To:
              </label>
              <input
                type="number"
                className="form-control"
                id="toPrice"
                value={maxPriceFilter}
                onChange={e => setMaxPriceFilter(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setActiveCategoryFilter('All');
                  dispatch(
                    filterProductsByPriceThunk(
                      parseFloat(minPriceFilter),
                      parseFloat(maxPriceFilter)
                    )
                  );
                }}
              >
                Filter price
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  dispatch(getProductsThunk());
                  setMinPriceFilter(0);
                  setMaxPriceFilter(0);
                }}
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="filter-category accordion-item mb-3 rounded-0">
        <div className="">
          <h3 className="category-header accordion-header border-top"></h3>
          <button
            type="button"
            className={`accordion-button rounded-0 ${openCategoryFilter ? '' : 'collapsed'}`}
            data-bs-toggle="collapse"
            onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
          >
            Category
          </button>
        </div>
        <div
          className={`category-body accordion-collapse collapse ${
            openCategoryFilter ? 'show' : ''
          }`}
        >
          <div className="accordion-body p-0">
            <ul className="list-group w-100 rounded-0">
              <li
                className={`list-group-item border-0 ${
                  activeCategoryFilter === 'All' ? 'active' : ''
                }`}
                role="button"
                onClick={() => {
                  setMinPriceFilter(0);
                  setMaxPriceFilter(0);
                  setActiveCategoryFilter('All');
                  dispatch(getProductsThunk());
                }}
              >
                All
              </li>
              {categories.map(category => (
                <li
                  key={category.id}
                  className={`list-group-item border-0 ${
                    category.name === activeCategoryFilter ? 'active' : ''
                  }`}
                  role="button"
                  onClick={() => {
                    setMinPriceFilter(0);
                    setMaxPriceFilter(0);
                    setActiveCategoryFilter(category.name);
                    dispatch(filterProductsByCategoryThunk(category.id));
                  }}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
