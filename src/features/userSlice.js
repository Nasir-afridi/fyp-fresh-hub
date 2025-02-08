import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// singup
export const submitForm = createAsyncThunk(
  'user/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/registration/signup', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/registration/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token"); 
    dispatch(logout());
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); 
    },
  },
  extraReducers: (builder) => {
    builder
      // For Signup
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'succeeded';
        state.user = action.payload?.user || {};
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // For Login
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user; 
        state.token = action.payload.token; 
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
      
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
