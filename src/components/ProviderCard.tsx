import { IProvider } from "@/interface/data.interface";
import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface ProviderCardProps {
  item: IProvider
}

export const ProviderCard: FC<ProviderCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg max-w-[20rem] sm:max-w-[18rem] lg:max-w-[16rem] mx-auto p-4 md:px-4 py-10 w-full shadow-md flex flex-col gap-4">
      <div className="mx-auto w-[6.5rem] h-[6.5rem] rounded-md overflow-hidden md:w-[6rem] md:h-[6rem] relative flex justify-center items-center">
        <Image src={item.img1} alt={`seler image`} fill />
      </div>
      <div className="mt-1 flex justify-start flex-col px-4">
        <div className="flex items-center gap-2">
          <h2 className=" text-afruna-blue font-bold lg:text-sm">{item.name}</h2>{" "}
          <span className="rounded-full text-xs text-green-700 w-[1.2rem] h-[1.2rem] bg-green-300  flex justify-center items-center">
            2
          </span>
        </div>
        <span className="mt-[0.4rem] text-afruna-gray font-semibold lg:text-sm">Cleaner</span>
        <div className="flex gap-2 items-center mt-2">
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
          <span className="text-sm">(201)</span>
        </div>
      </div>
      <Button variant={"primary"} className="mx-auto">
        Book Service
      </Button>
    </div>
  );
};

// BsHeartFill BsStarFill
