import CategoryCard from "@/components/CategoryCard";
import { NewsLetter } from "@/components/NewsLetter";
import { feautureCategories } from "@/constants/data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <section className="bg-white flex justify-center flex-col font-bold items-center gap-4 h-[11rem]">
        <h1 className="text-[1.8rem]">Featured Categories</h1>
        <div className="flex items-center justify-center gap-2">
          <span className=" text-afruna-blue text-lg">Home</span>
          <span className="w-[0.4rem] h-[0.4rem] rounded-full bg-sky-500"></span>
          <span className=" text-afruna-gray">categories</span>
        </div>
      </section>
      <section className="px-8 lg:px-20 pb-10 md:pb-16 flex flex-wrap sm:justify-center mt-12 gap-6 md:gap-8 lg:mt-10 ">
        {feautureCategories.slice(0, 20).map((item) => {
          return <CategoryCard key={item.text} item={item} />
        })}
      </section>
      <NewsLetter/>
    </>
  );
};

export default page;
