import React from "react";
import { formatDetailedEmailDate } from "../../utils/dateUtils";
import { getStarIcon } from "../../utils/emailUtils";
import { useEmailBody } from "./useEmailBody";

const EmailBody: React.FC = () => {
  const { isOpen, onToggle, getInitials, email, onStar } = useEmailBody();

  if (!email) {
    return null;
  }

  return (
    <div className="flex items-start gap-3 cursor-pointer" onClick={onToggle}>
      <div className="h-10 w-10 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-medium text-white">
        {getInitials(email.sender.name)}
      </div>
      <div className="w-0 flex-1 grow">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="truncate text-sm font-semibold">
                {email.sender.name}
              </span>
              {isOpen && (
                <span className="truncate text-xs text-gray-500">
                  &lt;{email.sender.email}&gt;
                </span>
              )}
            </div>
            {isOpen && (
              <div className="truncate text-xs text-gray-600">
                to {email.destinataries.map((d) => d.email).join(", ")}
              </div>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="truncate text-xs whitespace-nowrap text-gray-500">
              {formatDetailedEmailDate(email.sendDate)}
            </span>
            <button className="-m-1 cursor-pointer rounded p-1 hover:bg-gray-100">
              <img
                alt="Star"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                data-nimg="1"
                className="h-5 w-5"
                onClick={(e) => {
                  e.stopPropagation();
                  onStar(email.id);
                }}
                src={getStarIcon(email.status)}
                style={{ color: "transparent" }}
              />
            </button>
          </div>
        </div>
        <div
          className={`${
            !isOpen
              ? "truncate text-[13px] text-gray-600"
              : "mt-1 text-[13px] whitespace-pre-wrap"
          } `}
        >
          {email.body}
        </div>
      </div>
    </div>
  );
};

export default EmailBody;
