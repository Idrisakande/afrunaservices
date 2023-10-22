import MainHeader from "@/app/(root)/_components/MainHeader";
import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
  //   ReactElement
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      <MainHeader/>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;