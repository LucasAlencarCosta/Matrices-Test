import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menu";
import emailsReducer from "./slices/emails";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    emails: emailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
