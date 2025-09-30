import React from "react";
import type { HomePageProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { formatEmailDate } from "../../utils/dateUtils";

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useAppDispatch();
  const emails = useAppSelector((state) => state.emails.emails);

  return (
    <>
      <div className="flex h-[48px] items-center px-4" />
      <div>
        {emails.map((email) => (
          <div
            className="relative flex h-[40px] cursor-pointer items-center gap-3 border-b border-gray-200 px-4 text-sm hover:z-10 hover:shadow-md bg-gray-50"
            key={email.id}
          >
            <button className="rounded p-1 hover:bg-gray-100">
              <img
                src={
                  email.status === "Starred"
                    ? "/icon-star-filled-yellow.webp"
                    : "/icon-star.webp"
                }
                alt={"Star"}
                className="h-8 w-8 rounded-full"
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
    </>
  );
};

export default HomePage;
export type { HomePageProps } from "./types";
