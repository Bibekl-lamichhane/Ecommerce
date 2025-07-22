'use client'
import {Listbox, ListboxItem, cn} from "@heroui/react";
import Image from "next/image";
import { GrDocumentVerified } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { PiNewspaper } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx"; 
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ChatIcon = (props) => {
 
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"
        fill="currentColor"
      />
      <path
        d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};
export const TagIcon = (props) => {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"
        fill="currentColor"
      />
      <circle cx="8.353" cy="8.353" fill="currentColor" r="1.647" />
    </svg>
  );
};


export const UsersIcon = (props) => {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"
        fill="currentColor"
      />
      <path
        d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"
        fill="currentColor"
      />
    </svg>
  );
};
export const BookIcon = (props) => {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"
        fill="currentColor"
      />
      <path d="M8 6h9v2H8z" fill="currentColor" />
    </svg>
  );
};

export const IconWrapper = ({children, className}) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);

export const ChevronRightIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};
export const ItemCounter = ({number}) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRightIcon className="text-xl" />
  </div>
);

export default function AdminNavBar({isOpen,closeSlideBar}) {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    // Define the media query for small devices (e.g., below md = 768px)
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsSmallDevice(mediaQuery.matches);

    // Handler to update state on resize
    const handler = (event) => setIsSmallDevice(event.matches);

    // Attach listener
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleClick = () => {
    if (isSmallDevice) {
      closeSlideBar();
    }}
 
  return (<div className={`${!isOpen&&'hidden'} md:block  h-screen gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1  w-full md:w-[300px] overflow-visible  rounded-medium`}>
  <div className="p-2"><MdCancel size={22} onClick={closeSlideBar} color="orange" className=" md:hidden ml-[94%] m-3 "/></div> 
  <div className="md:mt-[10%] md:ml-[15%]] ml-[40%]"><Image src="/Digital Wallet.png"
      width={80}
      height={80}
      alt="Picture of the author"/></div>
    <Listbox
      aria-label="User Menu"
      className=""
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
      
    >
      <ListboxItem 
      as={Link}
      href="/admin"
      onClick={handleClick}
        key="overview"
        endContent={<ItemCounter number={13} />}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <RxDashboard className="text-lg " />
          </IconWrapper>
        }
    >
        OverView
      </ListboxItem>
      <ListboxItem
      as={Link}
      href="/admin/verifykyc"
      onClick={handleClick}
        key="verifykyc"
        endContent={<ItemCounter number={13} />}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <GrDocumentVerified className="text-lg " />
          </IconWrapper>
        }
      >
        Verify KYC
      </ListboxItem>
      <ListboxItem
      as={Link}
      href="/admin/addnotice"
      onClick={handleClick}
      
        key="addnotices"
        endContent={<ItemCounter number={6} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <PiNewspaper  className="text-lg " />
          </IconWrapper>
        }
      >
        Add Notices
      </ListboxItem>
      <ListboxItem
      as={Link}
      href="/admin/manageuser"
      onClick={handleClick}
      
        key="manageuser"
        endContent={<ItemCounter number={293} />}
        startContent={
          <IconWrapper className="bg-secondary/10 text-secondary">
            <UsersIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Manage User
      </ListboxItem>
      <ListboxItem
      as={Link}
      href="/admin/profile"
      
      onClick={handleClick}
        key="profile"
        endContent={<ItemCounter number={2} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <CgProfile className="text-lg " />
          </IconWrapper>
        }
      >
        Profile
      </ListboxItem>
      <ListboxItem
      as={Link}
      href="/admin/setting"
      onClick={closeSlideBar}
      
        key="seetings"
        endContent={<ItemCounter number={4} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <CiSettings className="text-lg " />
          </IconWrapper>
        }
      >
        Settings
      </ListboxItem>
      <ListboxItem 
       as={Link}
      href="/admin/liscence"
     
      onClick={handleClick}
        key="license"
        endContent={<span className="text-small text-default-400">MIT</span>}
        startContent={
          <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
            <BookIcon />
          </IconWrapper>
        }
      >
        License
      </ListboxItem>
    </Listbox></div>
  );
}
