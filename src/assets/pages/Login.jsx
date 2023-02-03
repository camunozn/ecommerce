import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAlertData } from '../../store/slices/alertData.slice';
import { setShowAlert } from '../../store/slices/showAlert.slice';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    axios
      .post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch(setAlertData({ alertType: 'success', alertMessage: 'Logged in successfully.' }));
        dispatch(setShowAlert(true));
        navigate('/');
      })
      .catch(err => {
        const message =
          err.response.status === 401 ? 'Wrong email or password. Try again.' : err.message;
        dispatch(setAlertData({ alertType: 'error', alertMessage: message }));
        dispatch(setShowAlert(true));
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(setShowAlert(false));
        }, 2000);
      });
  };

  return (
    <div className="login d-flex mb-5">
      <form
        className="card col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 m-auto"
        onSubmit={handleSubmit(submit)}
      >
        <div className="card-body">
          <div className="mb-4 border-bottom">
            <h3 className="fs-5 fw-normal lh-base ">
              <span className="text-primary">Welcome back!</span> Enter your email and password to
              continue:
            </h3>
          </div>
          <div className="card text-center border-primary mb-4 mx-auto w-75">
            <div className="card-header fs-6">Test data</div>
            <div className="card-body">
              <div className="card-text fs-6">
                <small>camunozn89@gmail.com</small>
              </div>
              <div className="card-text fs-6">
                <small>user1234</small>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="inputEmail" {...register('email')} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              {...register('password')}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 my-3">
            Login
          </button>
          <div className="px-1">
            <small>
              Don't have an account?{' '}
              <span className="text-primary" role="button" onClick={() => navigate('/signup')}>
                Sign up
              </span>
            </small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
