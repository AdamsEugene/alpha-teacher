/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItemLS } from "../../_shared/utils/saveData";
import K from "../../_shared/constants";

interface SidebarData {
  title: string;
  subTitle: string;
  content: any;
}

interface Mics {
  showSidebar: boolean;
  sidebarData: Partial<SidebarData>;
  showModal: boolean;
  loading: string;
  expandSidebar: boolean;
  hideSidebar: boolean;
  signup: { showOpt: boolean; isOtpVerified: boolean };
  modalContent: any;
  gridView: boolean;
  tableSelection: boolean;
}

const navePrevState = getItemLS<boolean>(K.MISC.EXPAND_SIDEBAR);

export const initialState: Mics = {
  showSidebar: false,
  sidebarData: {},
  showModal: false,
  loading: "",
  expandSidebar: !navePrevState,
  hideSidebar: false,
  signup: { showOpt: false, isOtpVerified: false },
  modalContent: {},
  gridView: false,
  tableSelection: false,
};

const micsSlice = createSlice({
  name: "mics",
  initialState,
  reducers: {
    updateMics(state, action: PayloadAction<Partial<Mics>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateMics } = micsSlice.actions;
export default micsSlice.reducer;
