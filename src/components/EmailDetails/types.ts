import type { Email } from "../../store/slices/emails/types";

export interface EmailDetailsProps {
  email: Email;
  onBack: () => void;
  onDelete: (id: string) => void;
  onMoveToSpam: (id: string) => void;
  onMoveToInbox: (id: string) => void;
  onStar: (id: string) => void;
}
