import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Pipelines Page",
};
const piplinesPage = () => {
  return (
    <div className="flex justify-center font-[BonaNovaBold] text-2xl">
      Pipelines
    </div>
  );
};

export default piplinesPage;
