export const EmailStatus = {
  Inbox: "Inbox",
  Spam: "Spam",
  Trash: "Trash",
  Starred: "Starred",
} as const;

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus];

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
