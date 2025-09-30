import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MenuState } from "./types";
import { EmailStatus } from "../emails/types";

const initialState: MenuState = {
  tabSelected: EmailStatus.Inbox,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setTabSelected: (state, action: PayloadAction<string>) => {
      state.tabSelected = action.payload;
    },
  },
});

export const { setTabSelected } = menuSlice.actions;
export default menuSlice.reducer;
