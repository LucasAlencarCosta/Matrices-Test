import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { NavigationState } from "./types";
import { EmailStatus } from "../emails/types";

const initialState: NavigationState = {
  tabSelected: EmailStatus.Inbox,
  selectedEmailId: null,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setTabSelected: (state, action: PayloadAction<string>) => {
      state.tabSelected = action.payload;
    },
    setSelectedEmail: (state, action: PayloadAction<string | null>) => {
      state.selectedEmailId = action.payload;
    },
    resetSelectedEmail: (state) => {
      state.selectedEmailId = null;
    },
  },
});

export const { setTabSelected, setSelectedEmail, resetSelectedEmail } =
  navigationSlice.actions;
export default navigationSlice.reducer;
