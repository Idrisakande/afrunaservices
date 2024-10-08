import { ICategories } from "@/interfaces/data.interface";
import Image from "next/image";
import { FC } from "react";

interface CategoryCardProps {
  item: ICategories;
}

const CategoryCard: FC<CategoryCardProps> = ({ item }) => {
  return (
    <div className="sm:max-w-[10.5rem] md:max-w-[15rem] w-full flex flex-col gap-4 rounded-lg bg-white py-10 justify-center items-center">
      <div className="flex justify-center items-center h-20 w-20 rounded-full bg-[#FEE4CA]">
        <div className="flex justify-center items-center h-[2.5rem] w-[2.5rem]">
          <div className="w-full h-full overflow-hidden relative">
            <Image src={item.img} alt="category" priority fill />
          </div>
        </div>
      </div>
      <p className="text-sm md:text-xs text-center md:px-4 font-extrabold capitalize">{item.text}</p>
    </div>
  );
};

export default CategoryCard;
