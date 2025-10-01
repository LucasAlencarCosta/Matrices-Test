import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { NavigationState } from "./types";
import { EmailStatus, type Email } from "../emails/types";

const initialState: NavigationState = {
  tabSelected: EmailStatus.Inbox,
  selectedEmail: null,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setTabSelected: (state, action: PayloadAction<string>) => {
      state.tabSelected = action.payload;
    },
    setSelectedEmail: (state, action: PayloadAction<Email | null>) => {
      state.selectedEmail = action.payload;
    },
    resetSelectedEmail: (state) => {
      state.selectedEmail = null;
    },
  },
});

export const { setTabSelected, setSelectedEmail, resetSelectedEmail } =
  navigationSlice.actions;
export default navigationSlice.reducer;
