import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Deals Page",
};
const dealsPage = () => {
  return (
    <div className="flex justify-center font-[BonaNovaBold] text-2xl">
      Deals
    </div>
  );
};

export default dealsPage;
