import { Button } from "@/components/ui/button";
import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-6 max-w-[94%] md:max-w-[100%] mx-auto">
      <h1 className="text-xl pl-2 lg:pl-0 lg:text-2xl leading-3 text-afruna-blue font-bold">
        Service Review
      </h1>
      <div className="flex flex-col gap-4 max-w-[95%] lg:max-w-[90%] mx-auto lg:mx-0  w-full">
        {/* 1sreview */}
        <div className="py-6 px-4 flex flex-col lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col gap-4 lg:max-w-[75%] w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex justify-center items-center h-[12rem] sm:w-[8rem] sm:h-[6rem]">
                  <div className="w-full h-full overflow-hidden relative rounded-md">
                    <Image src={imgs.review1} alt="review" priority fill />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-lg sm:text-2xl font-semibold leading-6 order-1 sm:-order-1">
                    Architectural Drawing Service
                  </h2>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[2.3rem] h-[2.3rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-blue font-semibold">
                      Jahimani Masilala
                    </span>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-gray">
                      jahimani@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center lg:max-w-[25%] w-full mt-4 lg:mt-0">
            <div className="flex items-center gap-4 order-1 lg:-order-1">
              <Button variant={"primary"} className="px-5 text-xs">
                Re Book
              </Button>
              <Button variant={"skyButton"} className="text-xs">
                Add review
              </Button>
            </div>
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
          </div>
        </div>
        {/* 1sreview */}
        <div className="py-6 px-4 flex flex-col lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col gap-4 lg:max-w-[75%] w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex justify-center items-center h-[12rem] sm:w-[8rem] sm:h-[6rem]">
                  <div className="w-full h-full overflow-hidden relative rounded-md">
                    <Image src={imgs.review1} alt="review" priority fill />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-lg sm:text-2xl font-semibold leading-6 order-1 sm:-order-1">
                    Architectural Drawing Service
                  </h2>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[2.3rem] h-[2.3rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-blue font-semibold">
                      Jahimani Masilala
                    </span>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-gray">
                      jahimani@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center lg:max-w-[25%] w-full mt-4 lg:mt-0">
            <div className="flex items-center gap-4 order-1 lg:-order-1">
              <Button variant={"primary"} className="px-5 text-xs">
                Re Book
              </Button>
              <Button variant={"skyButton"} className="text-xs">
                Add review
              </Button>
            </div>
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
          </div>
        </div>
        {/* 1sreview */}
        <div className="py-6 px-4 flex flex-col lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col gap-4 lg:max-w-[75%] w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex justify-center items-center w-full h-[12rem] sm:w-[8rem] sm:h-[6rem]">
                  <div className="w-full h-full overflow-hidden relative rounded-md">
                    <Image src={imgs.review1} alt="review" priority fill />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-lg sm:text-2xl font-semibold leading-6 order-1 sm:-order-1">
                    Architectural Drawing Service
                  </h2>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[2.3rem] h-[2.3rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-blue font-semibold">
                      Jahimani Masilala
                    </span>
                    <span className="sm:text-sm text-[0.65rem] text-afruna-gray">
                      jahimani@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-8 justify-center items-center lg:max-w-[25%] w-full mt-4 lg:mt-0">
            <div className="flex items-center gap-4 order-1 lg:-order-1">
              <Button variant={"primary"} className="px-5 text-xs">
                Re Book
              </Button>
              <Button variant={"skyButton"} className="text-xs">
                Add review
              </Button>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
