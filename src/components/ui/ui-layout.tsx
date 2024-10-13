"use client";

import { ReactNode } from "react";
import Navbar from "../global/Navbar/Navbar";

export function UiLayout({
  children,
  links,
}: {
  children: ReactNode;
  links: { label: string; path: string }[];
}) {
  return (
    <div className="h-full flex justify-center bg-bg-200 w-full">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-full bg-bg-100 flex flex-col">
        {/* <div className="h-20 ">
          <MainTabsHeader />
        </div> */}
        {/* <div className="navbar bg-base-300 text-neutral-content flex-col space-y-2">
          <div className="flex-none space-x-2">
            <WalletButton />
            <ClusterUiSelect />
          </div>
        </div> */}
        <div className="flex flex-col flex-grow overflow-y-auto px-4">
          {children}
        </div>
        <div className="bg-gray-900">
          <Navbar links={links} />
        </div>
      </div>
    </div>
  );
}
