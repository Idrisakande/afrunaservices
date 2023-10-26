import { Button } from "@/components/ui/button";
import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl leading-3 text-afruna-blue font-bold">
        Service Review
      </h1>
      <div className="flex flex-col gap-8 ">
        <div className="p-6">
          <div className="fle flex-col gap-4 max-w-[70%] w-full">
            <div className="flex gap-6">
              <div className="flex justify-center items-center w-[12rem] h-[10rem]">
                <div className="w-full h-full overflow-hidden relative">
                  <Image src={imgs.review1} alt="review" priority fill />
                </div>
              </div>
              <div>artchew</div>
            </div>
          </div>
          <div className="fle flex-col justify-center items-center gap-4 max-w-[30%] w-full">
            <div className="flex items-center">
              <Button variant={"primary"}>Rebook</Button>
              <Button>add review</Button>
            </div>
            <div className="text-xs">rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
