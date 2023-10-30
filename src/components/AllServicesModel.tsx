import { allservices } from "@/constants/data";
import { FC } from "react";

interface AllServicesModelProps {}

const AllServicesModel: FC<AllServicesModelProps> = ({}) => {
  return (
    <main className="fixed z-40 bg-white top-24 bottom-0 left-0 right-0">
      <div className="w-full h-full flex flex-wrap gap-x-8 gap-y-4 px-6 lg:px-40 py-8 overflow-y-auto ">
        {/*  */}
        {allservices.map(({ name, services }, index) => {
          return (
            <div key={index} className="flex max-w-[14rem] w-full flex-col justify-start items-start">
              <h2 className="text-sm font-bold">{name}</h2>
              {services.map((serv, index) => {
                return <p key={index} className="text-[0.68rem] mt-1 font-medium"> {serv}</p>;
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default AllServicesModel;
