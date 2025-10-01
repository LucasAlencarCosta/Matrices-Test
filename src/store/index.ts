import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigation";
import emailsReducer from "./slices/emails";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    emails: emailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
