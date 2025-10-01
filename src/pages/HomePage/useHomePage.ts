import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { markAsRead, toggleStar } from "../../store/slices/emails";
import type { Email } from "../../store/slices/emails/types";
import { setSelectedEmail } from "../../store/slices/navigation";
import { getEmailsForSection } from "../../utils/emailUtils";

export const useHomePage = () => {
  const dispatch = useAppDispatch();

  const { emails, navigation } = useAppSelector((state) => state);

  const onClickEmail = (email: Email) => {
    dispatch(markAsRead(email.id));
    dispatch(setSelectedEmail(email));
  };

  const onStarEmail = (emailId: string) => {
    dispatch(toggleStar(emailId));
  };

  const filteredEmails = getEmailsForSection(
    emails.emails,
    navigation.tabSelected
  );

  return {
    onClickEmail,
    onStarEmail,
    selectedEmail: navigation.selectedEmail,
    emails: filteredEmails,
  };
};
