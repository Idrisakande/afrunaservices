import { AiFillAppstore } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { NewsLetter } from "@/components/NewsLetter";
import ServicesCard from "@/components/ServicesCard";
import { services } from "@/constants/data";
import { ItemPicker } from "@/lib/utils/ItemPicker";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      {/* house bannar */}
      <section className="w-full h-[19rem] flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl leading-3 font-semibold"> Household service</h1>
        <div className="flex flex-wrap gap-2 lg:gap-5 max-w-[40%] mx-auto justify-center">
          {[
            "Cleaning",
            "Plumbing",
            "Electrical",
            "Handyman",
            "Air Conditioning and cooling system",
            "Landscapping and gardening",
          ].map((item, index) => {
            return (
              <div
                key={index}
                className=" p-2 rounded-md flex justify-center items-center gap-1 bg-[#FF9E3A87]"
              >
                <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-[#00AEEF]" />
                <span className="text-white text-xs">{item}</span>
              </div>
            );
          })}
        </div>
      </section>
      {/* filtering section */}
      <section className="flex justify-between py-2 items-center lg:px-40 bg-white">
        <p className="text-sm">
          12 result in <span className="font-bold">Home Service</span>
        </p>
        <div className="flex items-center justify-start gap-4 w-fit ">
          {/* <fieldset className="flex w-full flex-col gap-1 ">
            <ItemPicker
              items={["Hype"]}
              placeholder={"Hype"}
              getSelected={(val) => console.log(val as string)}
              // contentClassName={"p-2 bg-white text-xs"}
              triggerClassName="px-3 py-[0.3rem] rounded max-w-[8rem] w-full"
            />
          </fieldset> */}
          <div className="flex items-center gap-1">
            <span
              //   onClick={toggleflexDispaly}
              className={`${"bg-[#FFF4EA]"} border hover:bg-[#FFF4EA] duration-300 transition-all border-afruna-blue w-8 h-7 cursor-pointer flex justify-center items-center`}
            >
              <AiFillAppstore className="text-lg text-afruna-blue" />
            </span>
            <span
              //   onClick={toggleGridDispaly}
              className={` border hover:bg-[#FFF4EA] duration-300 transition-all border-afruna-blue w-8 h-7 cursor-pointer flex justify-center items-center`}
            >
              <BiMenu className="text-lg text-afruna-blue" />
            </span>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="flex flex-col lg:px-20 lg:pb-12">
        <div className="flex flex-wrap lg:justify-center gap-4 mt-8 ">
          {services.slice(0, 9).map((item) => {
            return <ServicesCard key={item.services} item={item} />;
          })}
        </div>
      </section>
      {/* newsletter */}
      <NewsLetter />
    </main>
  );
};

export default page;
