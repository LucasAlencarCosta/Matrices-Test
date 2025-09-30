import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import type { Email } from "../../store/slices/emails/types";

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const { emails, menu } = useAppSelector((state) => state);

  const filteredEmails = (): Email[] => {
    if (menu.tabSelected === "all-mail") {
      return emails.emails;
    }
    if (menu.tabSelected === "Inbox") {
      return emails.emails.filter(
        (email) => email.status === "Inbox" || email.status === "Starred"
      );
    }
    return emails.emails.filter(
      (email: Email) =>
        email.status === menu.tabSelected || menu.tabSelected === "all-mail"
    );
  };

  const starEmail = (id: string) => {
    dispatch({ type: "emails/toggleStar", payload: id });
  };

  return {
    dispatch,
    starEmail,
    emails: filteredEmails(),
  };
};
