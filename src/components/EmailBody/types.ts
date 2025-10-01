import type { Email } from "../../store/slices/emails/types";

export interface EmailBodyProps {
  email: Email;
  isOpen: boolean;
  onToggle: () => void;
  onStar: (id: string) => void;
}
