import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { markAsRead, toggleStar } from "../../store/slices/emails";
import { setSelectedEmail } from "../../store/slices/navigation";
import { getEmailsForSection, findEmailById } from "../../utils/emailUtils";

export const useHomePage = () => {
  const dispatch = useAppDispatch();

  const { emails, navigation } = useAppSelector((state) => state);

  const onClickEmail = (emailId: string) => {
    dispatch(markAsRead(emailId));
    dispatch(setSelectedEmail(emailId));
  };

  const onStarEmail = (emailId: string) => {
    dispatch(toggleStar(emailId));
  };

  const filteredEmails = getEmailsForSection(
    emails.emails,
    navigation.tabSelected
  );

  const selectedEmail = findEmailById(
    emails.emails,
    navigation.selectedEmailId
  );

  return {
    onClickEmail,
    onStarEmail,
    selectedEmail,
    tabSelected: navigation.tabSelected,
    emails: filteredEmails,
  };
};
