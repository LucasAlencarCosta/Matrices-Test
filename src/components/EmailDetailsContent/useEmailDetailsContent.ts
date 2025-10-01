import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleDelete, toggleSpam } from "../../store/slices/emails";
import { resetSelectedEmail } from "../../store/slices/navigation";

export const useEmailDetailsContent = () => {
  const dispatch = useAppDispatch();
  const { emails, navigation } = useAppSelector((state) => state);

  const onBack = () => {
    dispatch(resetSelectedEmail());
  };

  const onDelete = (emailId: string) => {
    dispatch(resetSelectedEmail());
    dispatch(toggleDelete(emailId));
  };

  const onMoveToSpam = (emailId: string) => {
    dispatch(resetSelectedEmail());
    dispatch(toggleSpam(emailId));
  };

  const email = emails.emails.find(
    (email) => email.id === navigation.selectedEmailId
  );

  return { email, onBack, onDelete, onMoveToSpam };
};
