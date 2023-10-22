import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC } from "react";

interface LandingbannarProps {}

const Landingbannar: FC<LandingbannarProps> = ({}) => {
  return (
    <section className="relative">
      <div className=" absolute left-0 top-[4rem] flex justify-center items-center">
        <div className="w-[4rem] h-[4rem] overflow-hidden relative">
          <Image
            src={imgs.hero1}
            alt="logo"
            priority
            // className="w-[3rem] h-[3rem]"
          />
        </div>
      </div>
      <div className="absolute left-7 top-[4rem] flex justify-center items-center">
        <div className="w-[4rem] h-[4rem] overflow-hidden relative">
          <Image src={imgs.hero2} alt="logo" priority fill />
        </div>
      </div>
    </section>
  );
};

export default Landingbannar;
