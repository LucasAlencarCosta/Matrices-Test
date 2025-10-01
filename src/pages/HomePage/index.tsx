import React from "react";
import type { HomePageProps } from "./types";
import { formatEmailDate } from "../../utils/dateUtils";
import { getStarIcon } from "../../utils/emailUtils";
import { useHomePage } from "./useHomePage";
import EmailDetailsContent from "../../components/EmailDetailsContent";
import { EmptyState } from "../../components/EmptyState";

const HomePage: React.FC<HomePageProps> = () => {
  const { emails, selectedEmail, onStarEmail, onClickEmail } = useHomePage();

  if (emails.length === 0) {
    return <EmptyState />;
  }

  if (selectedEmail) {
    return <EmailDetailsContent />;
  }

  return (
    <div className="mr-[56px] w-full mb-4 flex min-w-[500px] grow flex-col rounded-2xl bg-white">
      <div className="flex h-[48px] items-center px-4" />
      <div>
        {emails.map((email) => (
          <div
            className={`relative flex h-[40px] cursor-pointer items-center gap-3 border-b border-gray-200 px-4 text-sm hover:z-10 hover:shadow-md ${
              !email.isUnread ? "bg-gray-50" : ""
            }`}
            key={email.id}
            onClick={() => onClickEmail(email.id)}
          >
            <button
              className="rounded p-1 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                onStarEmail(email.id);
              }}
            >
              <img
                alt="Star"
                loading="lazy"
                className="h-5 w-5"
                width="40"
                height="40"
                decoding="async"
                data-nimg="1"
                src={getStarIcon(email.status)}
                style={{ color: "transparent" }}
              />
            </button>
            <div className="w-[200px] shrink-0 truncate">
              <span>
                {email.destinataries.map((user) => user.name).join(", ")}
              </span>
              {email.destinataries.length > 1 && (
                <span className="ml-1 text-xs text-gray-500">{`(${
                  email.destinataries.length - 1
                })`}</span>
              )}
            </div>
            <div className="w-0 flex-1 grow truncate text-sm">
              <span>{email.subject}</span>
              <span className="text-gray-500"> - {email.body}</span>
            </div>
            <div className="shrink-0 text-xs text-gray-500">
              {formatEmailDate(email.sendDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
