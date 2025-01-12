"use client";

import React from "react";
import SidebarFooter from "./parts/SidebarFooter";
import SidebarHeader from "./parts/SidebarHeader";
import SidebarItem from "./parts/SidebarTabs";

const SideBar = () => {
  return (
    <aside>
      <div className="flex flex-col space-y-4">
        <SidebarHeader />
        <SidebarItem />
      </div>
      <SidebarFooter />
    </aside>
  );
};

export default SideBar;
