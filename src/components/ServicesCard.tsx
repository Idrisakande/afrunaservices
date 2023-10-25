import { IService } from "@/interface/data.interface";
import { FC } from "react";
import { Button } from "./ui/button";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import { BsHeartFill, BsStarFill } from "react-icons/bs";

interface ServicesCardProps {
  item: IService;
}

const ServicesCard: FC<ServicesCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-2 lg:pb-4 rounded-lg md:px-4 w-full lg:max-w-[21rem] shadow-md flex flex-col gap-1 relative">
      <div className="relative flex justify-center  items-center h-[15rem] lg:h-[13rem] ">
        <div className="w-full h-full overflow-hidden relative rounded-lg">
          <Image src={item.img1} alt="partner" priority fill />
        </div>
        <Button variant={'whiteButton'} className="text-sm lg:text-xs h-8 absolute top-3 left-4 ">{item.services}</Button>
        <BsHeartFill className='absolute top-3 right-4 text-xl text-[#A7B7DD]'/>
      </div>
      <h4 className="font-bold text-afruna-blue mt-[1rem] px-2 lg:text-sm w-full truncate">{item.des}</h4>
      <div className="mt-1 flex justify-between items-center px-2 lg:text-xs text-afruna-gray font-semibold">
        <span className="flex items-center gap-2 lg:gap-1">
          <HiLocationMarker className="text-[#0382BD] text-3xl lg:text-lg" />
          {item.location}
        </span>
        <span className="flex items-center gap-2 lg:gap-1  "><BsStarFill className='text-afruna-gold'/>{item.rating}</span>
      </div>
      <div className="mt-1 flex justify-between px-2 items-center">
        <span className="flex items-center gap-1 font-bold text-afruna-blue lg:text-sm">{item.price}</span>
        <Button className="text-afruna-blue lg:text-xs bg-gradient-to-b from-sky-300 to-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-50 transition duration-500">
          Book Service
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;

// BsHeartFill BsStarFill
