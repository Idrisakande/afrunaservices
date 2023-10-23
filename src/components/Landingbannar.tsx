import { imgs } from "@/constants/images";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { Button } from "./ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { afrunaPartner } from "@/constants/data";

interface LandingbannarProps {}

const Landingbannar: FC<LandingbannarProps> = ({}) => {
  return (
    <section className="">
      <div className="relative h-[15rem] bg-slate-300 w-full flex flex-col justify-center items-center">
        <div className=" absolute left-3 top-[1.5rem] flex justify-center items-center">
          <div className="w-[4rem] h-[4rem] overflow-hidden relative">
            <Image
              src={imgs.hero1}
              alt="logo"
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute left-0 top-[11.5rem] flex justify-center items-center">
          <div className="w-[4rem] h-[4rem] overflow-hidden relative">
            <Image
              src={imgs.hero2}
              alt="logo"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute right-3 top-[2rem] flex justify-center items-center">
          <div className="w-[4rem] h-[4rem] overflow-hidden relative">
            <Image
              src={imgs.hero3}
              alt="logo"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute right-5 top-[11rem] flex justify-center items-center">
          <div className="w-[4rem] h-[4rem] overflow-hidden relative">
            <Image
              src={imgs.hero4}
              alt="logo"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-afruna-blue font-bold text-3xl justify-center items-center text-center">
          <span>Hire Experts</span>
          <div className="flex flex-col gap-2">
            <span>And get the work</span>
            <span className="block">Hire Experts</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-xl shadow-lg shadow-orange-100 px-2 mt-8 max-w-[90%] mx-auto rounded-lg border border-[#BBBBBB]">
        <div className="py-6 px-4 border-b border-orange-200">
          What are you looking for?
        </div>
        <div className="flex gap-3 items-center py-6 px-4 border-b border-orange-200">
          <HiLocationMarker className="text-orange-400 text-3xl" /> Country
        </div>
        <div className="flex gap-3 items-center py-6 px-4 border-b border-orange-200">
          <HiLocationMarker className="text-orange-400 text-3xl" /> State of
          Province
        </div>
        <div className="flex gap-3 items-center p-4">
          <Button variant={"primary"} className="w-full h-12 rounded-xl">
            Search Now <MdOutlineKeyboardArrowRight className="text-2xl " />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-w-[90%] mt-8 mx-auto">
        <h3 className=" text-neutral-500 text-xl">Our Partners</h3>
        <div className=" flex justify-start items-center gap-4">
          {afrunaPartner.map(({img, _id}) => {
            return (
              <div key={_id} className="flex justify-center items-center">
                <div className="w-[4rem] h-[1.5rem] overflow-hidden relative">
                  <Image
                    src={img}
                    alt="partner"
                    priority
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Landingbannar;
