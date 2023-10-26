"use client";

import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { BsFillChatLeftTextFill, BsHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

interface AccountSideBarProps {}

const AccountSideBar: FC<AccountSideBarProps> = ({}) => {
  const pathname = usePathname();
  console.log(pathname);

  const accounts = [
    {
      title: "Profile",
      icon: <FaUser />,
      link: "/profile",
    },
    {
      title: "Bookings",
      // Icon: MdPeopleAlt,
      link: "/bookings",
    },
    {
      title: "Favorite",
      icon: <BsHeartFill />,
      link: "/favorite",
    },
    {
      title: "Review",
      icon: <MdOutlineRateReview />,
      link: "/review",
    },
    {
      title: "Chat",
      icon: <BsFillChatLeftTextFill />,
      link: "/chat",
    },
  ];

  return (
    <aside className="w-full bg-white m-3 rounded-lg max-w-[10rem] px-1 flex flex-col gap-2">
      {accounts.map(({ link, title, icon }) => {
        return (
          <Link
            key={title}
            className={`${
              pathname === link
                ? "text-slate-950 font-extrabold bg-slate-300 rounded-md"
                : ""
            } w-full relative group py-2 pl-8 overflow-hidden flex justify-between items-center font-medium text-sm text-slate-500/70 hover:text-slate-950 hover:font-extrabold hover:bg-slate-300 transition duration-300`}
            href={link}
          >
            <div className="flex justify-start gap-2 items-center ">
              {icon}
              <span className="xs:hidden md:inline-block text-sm">{title}</span>
            </div>
            <div
              className={`${
                pathname === link ? "opacity-100" : ""
              } absolute -right-5 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </Link>
        );
      })}
    </aside>
  );
};

export default AccountSideBar;
