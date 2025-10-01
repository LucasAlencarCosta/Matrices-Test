import React from "react";
import { tabs } from "../../layouts/MainLayout/constants";
import { EmailStatus } from "../../store/slices/emails/types";
import { getEmailsForSection } from "../../utils/emailUtils";
import { useSidebar } from "./useSidebar";

const Sidebar: React.FC = () => {
  const { tabSelected, emails, onTabSelect } = useSidebar();

  return (
    <div className="w-[256px] shrink-0 px-3 text-sm">
      <div className="mb-4 h-[56px] w-[138px] rounded-2xl bg-[rgb(194,231,255)] opacity-50" />
      {tabs.map((tab) => {
        const isInboxOrSpam =
          tab.value === EmailStatus.Inbox || tab.value === EmailStatus.Spam;

        return (
          <div
            key={tab.value}
            onClick={() => onTabSelect(tab.value)}
            className={`flex cursor-pointer items-center gap-4 rounded-full py-1.5 pr-3 pl-4 font-semibold text-[rgb(32,33,36)] transition-colors ${
              tabSelected === tab.value
                ? "bg-[rgb(211,227,253)]"
                : "hover:bg-[rgb(237,242,252)]"
            }`}
          >
            <img
              alt={tab.label}
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="h-5 w-5"
              style={{ color: "transparent" }}
              src={tab.image}
            />
            <span className="flex-1">{tab.label}</span>
            {isInboxOrSpam && (
              <span className="text-xs font-normal">
                {getEmailsForSection(emails, tab.value).length}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
