import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Email, EmailsState, EmailStatus } from "./types";
import { mockEmails } from "../mocks/emails";

const initialState: EmailsState = {
  emails: mockEmails,
};

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    addEmail: (state, action: PayloadAction<Email>) => {
      state.emails.push(action.payload);
    },
    updateEmailStatus: (
      state,
      action: PayloadAction<{ id: string; status: EmailStatus }>
    ) => {
      const email = state.emails.find(
        (email) => email.id === action.payload.id
      );
      if (email) {
        email.status = action.payload.status;
      }
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.isUnread = false;
      }
    },
    markAsUnread: (state, action: PayloadAction<string>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.isUnread = true;
      }
    },
    toggleStar: (state, action: PayloadAction<string>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.status =
          email.status === "Starred" ? "Inbox" : ("Starred" as EmailStatus);
      }
    },
    toggleDelete: (state, action: PayloadAction<string>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.status =
          email.status === "Trash" ? "Inbox" : ("Trash" as EmailStatus);
      }
    },
    toggleSpam: (state, action: PayloadAction<string>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.status =
          email.status === "Spam" ? "Inbox" : ("Spam" as EmailStatus);
      }
    },
  },
});

export const {
  addEmail,
  updateEmailStatus,
  markAsRead,
  markAsUnread,
  toggleStar,
  toggleDelete,
  toggleSpam,
} = emailsSlice.actions;
export default emailsSlice.reducer;
