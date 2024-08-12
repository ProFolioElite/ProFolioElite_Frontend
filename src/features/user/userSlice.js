// src/features/user/userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// Define initial state
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      userData
    );
    return response.data;
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData
    );
    console.log(response);
    return response.data;
  }
);
// getUser
export const getUser = createAsyncThunk("user/getUser", async (token) => {
  console.log(token);

  const response = await axios.get("http://localhost:5000/api/auth/getUser", {
    headers: { "x-auth-token": token }, // Changed 'header' to 'headers'
  });
  
  console.log(response);
  return response.data;
});

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfession(state, action) {
      state.profession = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("token",action.payload.token );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("userDetails", action.payload.data);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout, setProfession } = userSlice.actions;

export default userSlice.reducer;
