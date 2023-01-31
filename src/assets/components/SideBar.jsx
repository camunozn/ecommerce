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
    <div className="side-bar">
      <aside className="">
        <div className="price-filter mb-4">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
            <h3 className="fs-6 mb-0 ms-2">Price</h3>
            <button
              className="btn btn-primary bg-transparent text-dark border-0"
              type="button"
              onClick={() => setOpenPriceFilter(!openPriceFilter)}
            >
              <i
                className={`fa-solid fa-angle-${
                  openPriceFilter ? 'up' : 'down'
                }`}
              ></i>
            </button>
          </div>
          <div className={`collapse ${openPriceFilter ? 'show' : ''}`}>
            <div className="card card-body">
              <form action="" className="d-flex flex-column">
                <div className="input-group mb-3">
                  <label
                    htmlFor="fromPrice"
                    className="col-sm-3 col-form-label col-form-label-sm"
                  >
                    From:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="fromPrice"
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label
                    htmlFor="toPrice"
                    className="col-sm-3 col-form-label col-form-label-sm"
                  >
                    To:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="toPrice"
                    />
                  </div>
                </div>
                <div className="ms-auto">
                  <button className="btn btn-primary btn-sm" type="submit">
                    Filter price
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="category-filter">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
            <h3 className="fs-6 mb-0 ms-2">Category</h3>
            <button
              className="btn btn-primary bg-transparent text-dark border-0"
              type="button"
              onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
            >
              <i
                className={`fa-solid fa-angle-${
                  openCategoryFilter ? 'up' : 'down'
                }`}
              ></i>
            </button>
          </div>
          <div className={`collapse ${openCategoryFilter ? 'show' : ''}`}>
            <div className="card card-body p-0">
              <div
                className="btn-group"
                roles="group"
                aria-label="Category filter"
              >
                <ul className="list-group w-100">
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
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
