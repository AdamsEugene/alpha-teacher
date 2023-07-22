import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FieldValuePair, School } from '../@types'

const initialState: School = { address: '', id: '', name: '', manager_id: '' }

type schoolKey = keyof School

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    updateSchool(state, action: PayloadAction<FieldValuePair>) {
      const field = action.payload.field as schoolKey
      state[field] = action.payload.value
    },
  },
})

export const { updateSchool } = schoolSlice.actions
export default schoolSlice.reducer
