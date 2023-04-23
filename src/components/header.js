import React from "react";

const Header = () => {
  return (
    <div className="w-100 flex justify-between bg-white shadow-2xl rounded-lg items-center">
      <div>
        <img
          src="/images/logo.png"
          className="w-1/6 p-5 pl-5 m-0 "
          alt="logo"
        />
      </div>
      <div className="p-0 m-0 font-vazirBold text-md pr-5">
        <p>شرکت دانش بنیان آدرین رشد دایان</p>
      </div>
    </div>
  );
};

export default Header;
