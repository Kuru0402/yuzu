import React from "react";

const TopBar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full  text-white text-sm py-10 px-5
      flex justify-end items-center transition-transform duration-300 bg-transparent shadow-md z-50 
  "
    >
      <div className="flex space-x-6 italic">
      <h5 className="">Any Queries..?</h5>
        <span>
          📞 Call:{" "}
          <a href="tel:9121072818" className="underline">
          +91 9121072818
          </a>
        </span>
        <span>
          📧 Mail:{" "}
          <a href="mailto:yuzuservices@gmail.com" className="underline">
          Yuzuservices@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
