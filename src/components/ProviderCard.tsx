import { IService } from "@/interface/data.interface";
import { FC } from "react";
import { Button } from "./ui/button";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { imgs } from "@/constants/images";

interface ProviderCardProps {
  item: IService;
}

export const ProviderCard: FC<ProviderCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-2 md:px-4 w-full shadow-md flex flex-col gap-1">
      <div className="mx-auto w-[4.5rem] h-[4.5rem] rounded-md overflow-hidden md:w-[6rem] md:h-[6rem] relative flex justify-center items-center">
          <Image src={imgs.seller1} alt={`seler image`} fill />
        </div>
      <div className="mt-1 flex justify-start flex-col items-center px-2">
        <div className="flex items-center gap-1">
            <h2 className="">Yamah Jamal</h2> <span className="rounded-full w-[1rem] h-[1rem] flex justify-center items-center">2</span>
        </div>
        <span className="flex items-center gap-2">
          Cleaner
        </span>
        <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2 ">
        {Array(5)
          .fill("_")
          .map((star, index) => (
            <div
              className={`${
                index < 4.5 ? "text-[#FF9E3A]" : "text-slate-400"
              }  text-sm md:text-xs`}
              key={index}
            >
              {index < 4.5 ? (
                index === Math.floor(4.5) && 4.5 % 1 !== 0 ? (
                  <BsStarHalf />
                ) : (
                  <BsStarFill />
                )
              ) : (
                <BsStar />
              )}
            </div>
          ))}
      </div>
            <span>(201)</span>
        </div>
      </div>
        <Button variant={'primary'} className="mx-auto">
          Book Service
        </Button>
    </div>
  );
};

// BsHeartFill BsStarFill
