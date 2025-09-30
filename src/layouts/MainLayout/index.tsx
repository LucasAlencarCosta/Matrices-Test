import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import type { MainLayoutProps } from "./types";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-[68px] shrink-0 bg-[rgb(233,238,246)]" />
      <div className="flex min-h-screen grow flex-col bg-[rgb(248,250,253)]">
        <Header />
        <div className="flex grow">
          <Sidebar />
          {/* Main Content */}
          <div className="mr-[56px] w-full mb-4 flex min-w-[500px] grow flex-col rounded-2xl bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
export type { MainLayoutProps } from "./types";
