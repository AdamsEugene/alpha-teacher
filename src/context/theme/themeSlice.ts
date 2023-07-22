/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localForage from "localforage";

import { ThemeInterface } from "../../_shared/theme/@types";
import appTheme from "../../_shared/theme/appTheme";
import { mergeState } from "../../_shared/utils/helpers/state";
import K from "../../_shared/constants";
import { ColorsKey } from "../../_shared/@types";

const themeState: ThemeInterface = appTheme.custom;

const themeSlice = localForage
  .getItem<ThemeInterface>(K.STORAGE_KEYS.REDUX_STATE)
  .then((theme) => {
    const mergedState = mergeState(themeState, theme);

    return createSlice({
      name: "theme",
      initialState: mergedState,
      reducers: {
        setCustomColor(
          state,
          action: PayloadAction<{
            main: ColorsKey;
            color: string;
            sub1: string;
            sub2?: string;
          }>
        ) {
          const { main, color, sub1, sub2 } = action.payload;
          if (sub2) (state.colors[main] as any)[sub1][sub2] = color;
          else (state.colors[main] as any)[sub1] = color;
        },
        setCustomTheme(state, action: PayloadAction<ThemeInterface>) {
          state.colors = action.payload.colors;
        },
      },
    });
  });

export default themeSlice;
