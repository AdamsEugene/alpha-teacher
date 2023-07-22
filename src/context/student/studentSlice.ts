import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValuePair, Student } from "../@types";

const initialState: Student = { class_id: "", id: "", name: "", parent_id: "" };

type StudentKey = keyof Student;

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    updateStudent(state, action: PayloadAction<FieldValuePair>) {
      const field = action.payload.field as StudentKey;
      state[field] = action.payload.value;
    },
  },
});

export const { updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
