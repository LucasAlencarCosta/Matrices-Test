import React from "react";
import type { HomePageProps } from "./types";
import { useAppSelector } from "../../hooks/redux";

const HomePage: React.FC<HomePageProps> = () => {
  // const dispatch = useAppDispatch();
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
            <span className="w-[200px] shrink-0 truncate">
              {email.destinataries.map((user) => user.name).join(", ")}
            </span>
            {email.destinataries.length > 1 && (
              <span>{`(${email.destinataries.length - 1})`}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
export type { HomePageProps } from "./types";
