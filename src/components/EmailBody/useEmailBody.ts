import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";

export const useEmailBody = () => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedEmail = useAppSelector(
    (state) => state.navigation.selectedEmail
  );

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
    email: selectedEmail,
  };
};
