import Header from "@/components/atoms/Header";
import NavbarAdminSetting from "@/components/molecules/NavbarAdminSetting";
import Sidebar from "@/components/molecules/Sidebar";
import React from "react";

export default function AdminSetting() {
  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-full w-full md:grid-cols-[auto,1fr]">
        <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
          <Sidebar />
        </div>
        <div className="border-b-[1px] border-b-[#353B43]">
          <Header />
        </div>
        <div className="">
          <NavbarAdminSetting />
        </div>
      </div>
    </div>
  );
}
