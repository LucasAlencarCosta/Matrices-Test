import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setTabSelected } from "../../store/slices/menu";
import { tabs } from "../../layouts/MainLayout/constants";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const tabSelected = useAppSelector((state) => state.menu.tabSelected);
  const emails = useAppSelector((state) => state.emails.emails);

  const getCountForTab = (tabValue: string) => {
    if (tabValue === "Inbox")
      return emails.filter((email) => email.status === "Inbox").length;
    if (tabValue === "Spam")
      return emails.filter((email) => email.status === "Spam").length;
    return null;
  };

  return (
    <div className="w-[256px] shrink-0 px-3 text-sm">
      <div className="mb-4 h-[56px] w-[138px] rounded-2xl bg-[rgb(194,231,255)] opacity-50" />
      {tabs.map((tab) => {
        const count = getCountForTab(tab.value);
        return (
          <div
            key={tab.value}
            onClick={() => dispatch(setTabSelected(tab.value))}
            className={`flex cursor-pointer items-center gap-4 rounded-full py-1.5 pr-3 pl-4 font-semibold text-[rgb(32,33,36)] transition-colors ${
              tabSelected === tab.value
                ? "bg-[rgb(211,227,253)]"
                : "hover:bg-[rgb(237,242,252)]"
            }`}
          >
            <img
              alt="Inbox"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="h-5 w-5"
              style={{ color: "transparent" }}
              src={tab.image}
            ></img>
            <span className="flex-1">{tab.label}</span>
            {count !== null && (
              <span className="text-xs font-normal">{count}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
