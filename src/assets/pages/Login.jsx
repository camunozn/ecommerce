import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = data => {
    axios
      .post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/user');
      })
      .catch(err =>
        err.response.status === 401 ? alert('Wrong email or password') : console.log(err)
      );
  };

  return (
    <div className="login d-flex" style={{ height: '75vh' }}>
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
          <div className="card text-center border-primary mb-5 mx-auto w-75">
            <div className="card-header fs-6">Test data</div>
            <div className="card-body">
              <div className="card-text fs-6">john@gmail.com</div>
              <div className="card-text fs-6">john1234</div>
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
            <p style={{ fontSize: '0.7rem' }}>
              Don't have an account?{' '}
              <span className="text-primary" role="button" onClick={() => navigate('/signup')}>
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
