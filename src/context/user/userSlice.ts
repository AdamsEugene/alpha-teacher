import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../@types";

const initialState: User = { email: "", id: "", name: "", role: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<Partial<User>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
