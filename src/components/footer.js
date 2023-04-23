import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex justify-between bg-white shadow-2xl mt-7 py-14 rounded-lg items-center">
        <div className="w-1/4 flex flex-wrap pl-5">
          {/* <img
            src="/images/logo.png"
            className="w-6/12 p-5 pl-5 m-0 "
            alt="logo"
          />
          <img
            src="/images/6705855_250.jpg"
            className="w-4/12 p-5 pl-5 m-0 "
            alt="logo"
          /> */}
          <p className="font-vazirBold text-md">071-3623شماره تماس: 70</p>
        </div>
        <div className="p-0 m-0 font-vazirBold text-md pr-5">
          <p>
            آدرس:شیراز، شهرك آرین، پارك علم و فناوري استان فارس، ساختمان
            پرسپولیس، شرکت دانش بنیان آدرین رشد دایان
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
