import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteEmail, toggleSpam } from "../../store/slices/emails";
import { setSelectedEmail } from "../../store/slices/navigation";

export const useEmailDetailsContent = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppSelector((state) => state);

  const onBack = () => {
    dispatch(setSelectedEmail(null));
  };

  const onDelete = (emailId: string) => {
    dispatch(deleteEmail(emailId));
  };

  const onMoveToSpam = (emailId: string) => {
    dispatch(toggleSpam(emailId));
  };

  const email = navigation.selectedEmail;

  return { email, onBack, onDelete, onMoveToSpam };
};
