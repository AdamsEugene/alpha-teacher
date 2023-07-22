import { createSlice } from '@reduxjs/toolkit'

type Version = number

export const versionState: Version = 0

const versionSlice = createSlice({
  name: 'Counter',
  initialState: versionState,
  reducers: {
    increaseVersionNumber(state) {
      return (state += 1)
    },
  },
})

export const { increaseVersionNumber } = versionSlice.actions
export default versionSlice.reducer
