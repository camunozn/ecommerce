import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategoryThunk } from '../../store/slices/products.slice';

const SideBar = () => {
  const categories = useSelector(state => state.categories);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('');

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
              <label htmlFor="fromPrice" className="form-label w-25 me-2">
                From:
              </label>
              <input type="number" className="form-control" id="fromPrice" />
            </div>
            <div className="input-group input-group-sm mb-3">
              <label htmlFor="toPrice" className="form-label w-25 me-2">
                To:
              </label>
              <input type="number" className="form-control" id="toPrice" />
            </div>
            <button className="btn btn-primary btn-sm ms-auto" type="button">
              Filter price
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="filter-category accordion-item mb-3 rounded-0">
        <div className="">
          <h3 className="category-header accordion-header"></h3>
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
              {categories.map(category => (
                <li
                  key={category.id}
                  className={`list-group-item border-0 ${
                    category.name === activeCategoryFilter ? 'active' : ''
                  }`}
                  role="button"
                  onClick={() => {
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
