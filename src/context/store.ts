import {
  ConfigureStoreOptions,
  Reducer,
  configureStore,
} from "@reduxjs/toolkit";
import counterReducer from "./version/versionSlice";
import themeSlice from "./theme/themeSlice";
import userSlice from "./user/userSlice";
import schoolSlice from "./school/schoolSlice";
import studentSlice from "./student/studentSlice";
import micsSlice from "./mics/micsSlice";
import api from "./apis/api";
import { ThemeInterface } from "../_shared/theme/@types";

const reducer = (theme: Reducer<ThemeInterface>) => ({
  version: counterReducer,
  theme,
  user: userSlice,
  school: schoolSlice,
  student: studentSlice,
  mics: micsSlice,
  [api.reducerPath]: api.reducer,
});

const store = async (options?: ConfigureStoreOptions["preloadedState"]) => {
  const themeReducer = (await themeSlice).reducer;
  return configureStore({
    reducer: reducer(themeReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  });
};

// eslint-disable-next-line @typescript-eslint/unbound-method
const state = (await store()).getState;
const action = (await store()).dispatch;

export type AppDispatch = Awaited<typeof action>;
export type RootState = Awaited<ReturnType<typeof state>>;

export default store;
