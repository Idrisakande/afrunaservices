import { IService } from "@/interface/data.interface";
import { FC } from "react";
import { Button } from "./ui/button";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface ServicesCardProps {
  item: IService;
}

const ServicesCard: FC<ServicesCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-2 md:px-4 w-full shadow-md flex flex-col gap-1 relative">
      <div className="relative flex justify-center items-center h-[15rem]">
        <div className="w-full h-full overflow-hidden relative">
          <Image src={item.img1} alt="partner" priority fill />
        </div>
      </div>
      <h4 className="font-bold text-afruna-blue mt-1.5">{item.des}</h4>
      <div className="mt-1.5 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <HiLocationMarker className="text-[#0382BD] text-3xl" />
          {item.location}
        </span>
        <span className="flex items-center gap-2 "><BsStarFill className='text-afruna-gold'/>{item.rating}</span>
      </div>
      <div className="mt-1.5 flex justify-between items-center">
        <span className="flex items-center gap-1">{item.price}</span>
        <Button className=" text-afruna-blue bg-gradient-to-b from-sky-300 to-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-50 transition duration-500">
          Book Service
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;

// BsHeartFill BsStarFill
