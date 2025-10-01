import React, { useState } from "react";
import type { EmailDetailsProps } from "./types";
import EmailBody from "../EmailBody";

const EmailDetails: React.FC<EmailDetailsProps> = ({
  email,
  onBack,
  onDelete,
  onMoveToSpam,
  //   onMoveToInbox,
  onStar,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mr-[56px] mb-4 flex min-w-[500px] grow flex-col rounded-2xl bg-white">
      <div className="px-4 pt-2 pb-0">
        <div className="flex items-center gap-2">
          <button
            className="mr-2 -ml-2 cursor-pointer rounded-full p-2 hover:bg-gray-100"
            onClick={onBack}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            title="Report spam"
            className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
            onClick={() => onMoveToSpam(email.id)}
          >
            <img
              alt={"Spam"}
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="h-5 w-5"
              style={{ color: "transparent" }}
              src={"/icon-spam.webp"}
            />
          </button>
          <button
            title="Delete"
            className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
            onClick={() => onDelete(email.id)}
          >
            <img
              alt={"Thrash"}
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="h-5 w-5"
              style={{ color: "transparent" }}
              src={"/icon-trash.webp"}
            />
          </button>
        </div>
        <div className="mt-6">
          <h2 className="ml-[52px] text-[22px] font-normal">{email.subject}</h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-5">
          <EmailBody
            email={email}
            isOpen={isOpen}
            onToggle={toggleDropdown}
            onStar={onStar}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
