import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  resetStar,
  resetStatus,
  toggleDelete,
  toggleSpam,
} from "../../store/slices/emails";
import { resetSelectedEmail } from "../../store/slices/navigation";

export const useEmailDetailsContent = () => {
  const dispatch = useAppDispatch();
  const { emails, navigation } = useAppSelector((state) => state);

  const onBack = () => {
    dispatch(resetSelectedEmail());
  };

  const onDelete = (emailId: string) => {
    dispatch(resetSelectedEmail());
    dispatch(resetStar(emailId));
    dispatch(toggleDelete(emailId));
  };

  const onMoveToSpam = (emailId: string) => {
    dispatch(resetSelectedEmail());
    dispatch(toggleSpam(emailId));
  };

  const onMoveToInbox = (emailId: string) => () => {
    dispatch(resetSelectedEmail());
    dispatch(resetStatus(emailId));
  };

  const email = emails.emails.find(
    (email) => email.id === navigation.selectedEmailId
  );

  return {
    email,
    onBack,
    onDelete,
    onMoveToSpam,
    onMoveToInbox,
    actualTab: navigation.tabSelected,
  };
};
