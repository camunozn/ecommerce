import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../assets/utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: '',
  reducers: {
    setLoggedUser: (state, action) => {
      const loggedUser = action.payload;
      return loggedUser;
    },
  },
});

export const getLoggedUserThunk = () => dispatch => {
  // Display loading screen
  dispatch(setIsLoading(true));
  // Request
  return axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/users/me', getConfig())
    .then(res => dispatch(setLoggedUser(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setLoggedUser } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
