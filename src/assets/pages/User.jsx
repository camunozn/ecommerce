import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUserThunk } from '../../store/slices/loggedUser.slice';

const User = () => {
  const loggedUser = useSelector(state => state.loggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUserThunk());
  }, []);

  return (
    <div className="user-account d-flex py-5">
      <div className="card col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 p-4 mx-auto rounded-5">
        <div className="text-center text-muted mt-3" style={{ fontSize: '5rem' }}>
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">{`${loggedUser?.firstName} ${loggedUser?.lastName}`}</h5>
          <p className="card-text">
            <span className="text-muted">Email: </span>
            {loggedUser?.email}
          </p>
          <p className="card-text">
            <span className="text-muted">Phone: </span>
            {loggedUser?.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
