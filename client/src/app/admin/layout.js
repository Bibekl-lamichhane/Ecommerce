"use client";
import React, { useState } from "react";
import AdminNavBar from "@/components/navbar/adminCom/AdminNavBar";
import { GiHamburgerMenu } from "react-icons/gi";
const layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggleSideBar = () => {
    setisOpen((prev)=>!prev);
  };
  const closeSlideBar = () => {
    setisOpen(false);
  };
  return (
    <div className='md:flex'>
      <div className={`${isOpen===false ? 'hidden':'block'} md:block w-[422px] h-screen`}><AdminNavBar isOpen={isOpen} closeSlideBar={closeSlideBar} /></div>
      <div className="">
        <div className={`${isOpen===false?'block':'hidden'}md:hidden m-2`}>
          <GiHamburgerMenu size={20} onClick={toggleSideBar} className={`${isOpen==true?'hidden':'block'} md:hidden m-3`}/>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
