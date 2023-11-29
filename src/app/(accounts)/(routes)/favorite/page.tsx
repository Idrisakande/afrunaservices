"use client";
import FavoriteServiceCard from "@/components/FavoriteServiceCard";
import ServicesCard from "@/components/ServicesCard";
import { useAppSelector } from "@/hooks";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <section className="flex flex-col gap-6 max-w-[94%] md:max-w-[100%] mx-auto">
      <h1 className="text-xl lg:text-2xl leading-3 text-afruna-blue font-bold">
        Favorite
      </h1>
      {favorites.length > 0 ? (
        <div className="flex flex-wrap gap-8 ">
          {favorites.map((item) => {
            return <ServicesCard key={item._id} item={item} />;
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Page;
