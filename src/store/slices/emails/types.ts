export type EmailStatus = "Inbox" | "Spam" | "Trash" | "Starred";

interface User {
  id: string;
  name: string;
  email: string;
}

export interface Email {
  id: string;
  subject: string;
  email: string;
  sender: User;
  destinataries: User[];
  body: string;
  sendDate: Date;
  status: EmailStatus;
  isUnread: boolean;
}

export interface EmailsState {
  emails: Email[];
}
