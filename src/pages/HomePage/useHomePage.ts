import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getEmailsForSection } from "../../utils/emailUtils";
import type { Email } from "../../store/slices/emails/types";

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const onClickEmail = (email: Email | null) => {
    dispatch({ type: "emails/markAsRead", payload: email?.id ?? null });
    setSelectedEmail(email);
  };

  const onDeleteEmail = (id: string) => {
    dispatch({ type: "emails/deleteEmail", payload: id });
    setSelectedEmail(null);
  };

  const onMoveToSpam = (id: string) => {
    dispatch({
      type: "emails/updateEmailStatus",
      payload: { id, status: "Spam" },
    });
    setSelectedEmail(null);
  };

  const onMoveToInbox = (id: string) => {
    dispatch({
      type: "emails/updateEmailStatus",
      payload: { id, status: "Inbox" },
    });
    setSelectedEmail(null);
  };

  const onStarEmail = (id: string) => {
    dispatch({ type: "emails/toggleStar", payload: id });
  };

  const { emails, menu } = useAppSelector((state) => state);

  const filteredEmails = getEmailsForSection(emails.emails, menu.tabSelected);

  const starEmail = (id: string) => {
    dispatch({ type: "emails/toggleStar", payload: id });
  };

  return {
    onClickEmail,
    dispatch,
    starEmail,
    onDeleteEmail,
    onMoveToSpam,
    onMoveToInbox,
    onStarEmail,
    selectedEmail,
    emails: filteredEmails,
  };
};
