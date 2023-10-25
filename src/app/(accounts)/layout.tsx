import { FC, ReactNode } from "react";
import MainHeader from "../(root)/_components/MainHeader";
import Footer from "../(root)/_components/Footer";
import { NewsLetter } from "@/components/NewsLetter";
import AccountSideBar from "./(routes)/_components/AccountSideBar";

interface layoutProps {
  children: ReactNode;
}

const AccountLayout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <MainHeader />
      <div className=" min-h-full flex bg-[#F7F7FF]">
        <AccountSideBar />
        {children}
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AccountLayout;
