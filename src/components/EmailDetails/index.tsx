import React from "react";
import type { EmailDetailsProps } from "./types";
import { formatDetailedEmailDate } from "../../utils/dateUtils";

const EmailDetails: React.FC<EmailDetailsProps> = ({
  email,
  onBack,
  onDelete,
  onMoveToSpam,
  onMoveToInbox,
  onStar,
}) => {
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
          <div className="flex items-start gap-3 cursor-pointer">
            <div className="h-10 w-10 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-medium text-white">
              {(() => {
                const nameParts = email.sender.name.split(" ");
                const firstInitial = nameParts[0]?.[0] || "";
                const lastInitial = nameParts[nameParts.length - 1]?.[0] || "";
                return `${firstInitial}${lastInitial}`;
              })()}
            </div>
            <div className="w-0 flex-1 grow">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="truncate text-sm font-semibold">
                      {email.sender.name}
                    </span>
                    <span className="truncate text-xs text-gray-500">
                      &lt;{email.sender.email}&gt;
                    </span>
                  </div>
                  <div className="truncate text-xs text-gray-600">
                    to {email.destinataries.map((d) => d.email).join(", ")}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="truncate text-xs whitespace-nowrap text-gray-500">
                    {formatDetailedEmailDate(email.sendDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
