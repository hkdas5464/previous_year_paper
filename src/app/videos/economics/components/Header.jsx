//* Packages Imports */
import React from "react";
import Image from "next/image";
import mediaJson from "../data/mediaJson";
import NextNav from "@/app/Nextnav";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full py-4  dark:bg-black opacity-80">
      <NextNav/>
      <div className="container flex items-center justify-start gap-2 px-4 mx-auto">
        {/* <Image
          src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg"
          alt="rigi_logo"
          height={60}
          width={60}
        /> */}
        <h1 className="text-[22px] uppercase font-semibold text-[#4a148c]">
        {mediaJson.subjects.map((subject, index) => (
        <div key={index}>
          <h2>{subject.name}</h2>
        </div>
      ))}
        </h1>
      </div>
    </header>
  );
};

export default Header;
