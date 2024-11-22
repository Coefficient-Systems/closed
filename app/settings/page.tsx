import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Settings Page",
};
const settingPage = () => {
  return (
    <div className="flex justify-center font-[BonaNovaBold] text-2xl">
      Settings
    </div>
  );
};

export default settingPage;
