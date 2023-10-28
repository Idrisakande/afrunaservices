import ServicesCard from "@/components/ServicesCard";
import { services } from "@/constants/data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-6 max-w-[94%] md:max-w-[100%] mx-auto">
    <h1 className="text-xl lg:text-2xl leading-3 text-afruna-blue font-bold">Favorite</h1>
      <div className="flex flex-wrap gap-8 ">
        {services.slice(0, 5).map((item) => {
          return <ServicesCard key={item.services} item={item} />;
        })}
      </div>
    </section>
  );
};

export default page;
