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
const baseUrl = "http://localhost:5000";

// const baseUrl = "https://profolioelite-backend-1.onrender.com";
// const token = localStorage.getItem("token");
// const initialInputUserDetails = localStorage.getItem("userDetails");
// const changingIntoObject = JSON.parse(initialInputUserDetails);
// console.log(changingIntoObject._id);
// console.log(changingIntoObject);
// const _id = changingIntoObject?._id;

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    const response = await axios.post(`${baseUrl}/api/auth/register`, userData);
    return response.data;
  }
);
export const updateTemplateUser = createAsyncThunk(
  "user/templateUser",
  async ({ templateName, token, _id, email }) => {
    // Ensure _id is included in the destructured parameters
    console.log(token);

    const response = await axios.post(
      `${baseUrl}/api/auth/template`,
      { templateName, _id, email }, // Combine templateName and _id into a single object
      {
        headers: { "x-auth-token": token }, // Setting the headers
      }
    );
    return response.data;
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await axios.post(`${baseUrl}/api/auth/login`, userData);
    console.log(response);
    return response.data;
  }
);
// getUser
export const getUser = createAsyncThunk("user/getUser", async (token) => {
  console.log(token);

  const response = await axios.get(`${baseUrl}/api/auth/getUser`, {
    headers: { "x-auth-token": token }, // Changed 'header' to 'headers'
  });

  console.log(response);
  return response.data;
});

// /api/getuserdetails
export const getuserdetails = createAsyncThunk(
  "user/getuserdetails",
  async ({ token, email }) => {
    try {
      console.log(token);

      const response = await axios.post(
        `${baseUrl}/api/getuserdetails`,
        { email }, // Pass email as part of the request body
        {
          headers: { "x-auth-token": token }, // Properly set headers here
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      throw error; // Propagate the error for further handling
    }
  }
);

// logout
export const logOut = createAsyncThunk("user/logout", async () => {
  const response = await axios.get(`${baseUrl}/api/auth/logout`);

  console.log(response);
  return response.data;
});

export const userDetails = createAsyncThunk(
  "user/userDetails",
  async ({ token, inputuserDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/userDetails`,
        inputuserDetails, // FormData object
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "multipart/form-data", // Let Axios set boundary automatically
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error");
    }
  }
);
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
    inputUserDetialsInForm(state, action) {
      state.inputUserDetialsInForm = action.payload;
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
        localStorage.setItem("token", action.payload.token);
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
        const userData = JSON.stringify(action.payload);
        localStorage.setItem("userDetails", userData);
        if (updateTemplateUser) {
          localStorage.setItem("userDetails", userData);
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logOut.pending, (state) => {
        state.status = "loading";
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("userDetails", action.payload.data);
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(userDetails.pending, (state) => {
        state.status = "loading";
      })

      .addCase(userDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("inputUserDetails", action.payload);
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // getuserdetails
      .addCase(getuserdetails.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getuserdetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getUserInfo = action.payload;
        localStorage.setItem("getUserDetails", action.payload);
      })
      .addCase(getuserdetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTemplateUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(updateTemplateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.template = action.payload;
        localStorage.setItem("getTemplate", action.payload.data);
      })
      .addCase(updateTemplateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout, setProfession, inputUserDetialsInForm } =
  userSlice.actions;

export default userSlice.reducer;
