import { EmailStatus } from "../../store/slices/emails/types";

export const tabs = [
  {
    label: "Inbox",
    value: EmailStatus.Inbox,
    image: "/icon-inbox.webp",
  },
  {
    label: "Starred",
    value: EmailStatus.Starred,
    image: "/icon-star.webp",
  },
  {
    label: "All mail",
    value: "all-mail",
    image: "/icon-all-mail.webp",
  },
  {
    label: "Spam",
    value: EmailStatus.Spam,
    image: "/icon-spam.webp",
  },
  {
    label: "Trash",
    value: EmailStatus.Trash,
    image: "/icon-trash.webp",
  },
];
