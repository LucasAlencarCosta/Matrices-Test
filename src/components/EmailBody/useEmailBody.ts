import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleStar } from "../../store/slices/emails";

export const useEmailBody = () => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedEmail = useAppSelector((state) =>
    state.emails.emails.find(
      (email) => email.id === state.navigation.selectedEmailId
    )
  );
  const dispatch = useAppDispatch();

  const onStar = (emailId: string) => {
    dispatch(toggleStar(emailId));
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.[0] || "";
    const lastInitial = nameParts[nameParts.length - 1]?.[0] || "";
    return `${firstInitial}${lastInitial}`;
  };

  return {
    isOpen,
    onToggle,
    getInitials,
    onStar,
    email: selectedEmail,
  };
};
