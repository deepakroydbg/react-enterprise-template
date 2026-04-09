import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Deepak Kumar",
  email: "deepakroydbg@gmail.com",
  role: "Frontend Developer",
  location: "Bangalore, India",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;