import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginRequest from "../services/LoginRequests";
import axios from "axios";
//get user from local storage
const user = localStorage.getItem("user");

// const user = JSON.parse(user1);
console.log(user);
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//register User
export const register = createAsyncThunk(
  "auth/regsiter",
  async (user, thunkAPI) => {
    try {
      return await axios
        .post("http://localhost:4000/users/register", user)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//LogIn
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await axios
      .post("http://localhost:4000/users/login", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await loginRequest.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;






// Start Practice Simple Slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isLoggedIn: false },
//   reducers: {
//     login(state) {
//       alert("he");
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice;
