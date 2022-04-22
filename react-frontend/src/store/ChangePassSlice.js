import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  otp: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const sendOtp = createAsyncThunk(
  "ChangePass/otp",
  async (user, thunkAPI) => {
    try {
      return await axios
        .post("http://localhost:4000/users/send-mail", user)
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

const ChangePassSlice = createSlice({
  name: "ChangePass",
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
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(sendOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.otp = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.otp = null;
      });
  },
});

export const { reset } = ChangePassSlice.actions;
export default ChangePassSlice.reducer;
