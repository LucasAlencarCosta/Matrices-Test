import type { Email } from "../emails/types";

export interface NavigationState {
  tabSelected: string;
  selectedEmail: Email | null;
}
