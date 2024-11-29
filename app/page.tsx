import React from "react";
import trollface from "../public/assets/Trollface.png";

const landingPage = () => {
  return (
    <div className="flex justify-center mt-64">
      <a href="/dashboard">
        <img src={trollface.src} alt="trollface"></img>
      </a>
    </div>
  );
};

export default landingPage;
