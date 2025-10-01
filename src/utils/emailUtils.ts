import type { Email } from "../store/slices/emails/types";

export const getEmailsForSection = (
  emails: Email[],
  selectedTab: string
): Email[] => {
  if (selectedTab === "all-mail") {
    return emails;
  }

  if (selectedTab === "Inbox") {
    return emails.filter(
      (email) => email.status === "Inbox" || email.status === "Starred"
    );
  }

  return emails.filter((email) => email.status === selectedTab);
};

export const getStarIcon = (emailStatus: string): string => {
  return emailStatus === "Starred"
    ? "/icon-star-filled-yellow.webp"
    : "/icon-star.webp";
};
