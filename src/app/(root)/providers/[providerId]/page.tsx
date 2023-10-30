import GallerySlider from "@/components/GallerySlider";
import { ProviderCard } from "@/components/ProviderCard";
import ProviderReviewsSlider from "@/components/ProviderReviewsSlider";
import { Button } from "@/components/ui/button";
import { providers } from "@/constants/data";
import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC } from "react";
import {
  BsFillChatLeftTextFill,
  BsHeartFill,
  BsShareFill,
  BsStarFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

interface pageProps {
  params: {
    providerId: string;
  };
}

const page: FC<pageProps> = ({ params: { providerId } }) => {
  console.log(providerId);

  return (
    <main className="">
      <section className="flex px-4 py-4 gap-2 lg:px-32 justify-start items-center">
        <span className="text-lg font-semibold">Home</span>
        <MdArrowForwardIos className="text-[#999999] text-xs" />
        <span className="text-xs md:text-sm">Home Service</span>
        <MdArrowForwardIos className="text-[#999999] text-xs" />
        <span className="text-xs md:text-sm">Plumbing service</span>
      </section>

      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-8 lg:px-24 xl:px-32">
        <div className="flex flex-col w-full md:max-w-[50%] xl:pr-8 xl:max-w-[60%]">
          <section className=" py-4 gap-2 xl:pr-20">
            <div className="flex justify-start items-center gap-5">
              <div className="flex justify-center items-center">
                <div className="w-[7.5rem] h-[7.5rem] overflow-hidden relative">
                  <Image src={imgs.prodeatimg} alt="detail-img" priority fill />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-afruna-blue">
                <div className="flex justify-start items-center gap-2">
                  <span className="">Yamaha Jamal</span>
                  <span className="rounded-full text-xs text-green-700 w-[1rem] h-[1rem] bg-green-300 flex justify-center items-center">
                    <IoMdCheckmark size={11} />
                  </span>
                </div>
                <h2 className=" font-semibold">Plumbing Service</h2>
                <div className="flex flex-col sm:flex-row gap-1  text-xs text-afruna-gray font-semibold">
                  <div className="flex justify-start text-start items-center text-sm gap-1 lg:gap-1">
                    <HiLocationMarker className="text-[#0382BD] text-xl lg:text-lg" />
                    {`Kaunda`}
                  </div>
                  <div className="flex items-center gap-2 md:ml-4 font-medium">
                    <span className="flex items-center gap-1 lg:gap-1  ">
                      <BsStarFill className="text-afruna-gold" />
                      (216)
                    </span>
                    <span className="">(123 Reviews)</span>
                  </div>
                </div>
                <span className="text-xs ">Deliverd (7)</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-2 justify-start items-start">
              <p className="text-sm">
                Hi! Welcome to my profile!. I like to make Anything plumbing.
                Please leave me a message if you have any questions. Thank you!
              </p>
              <Button variant={"afrunaOutline"} className="">
                <BsFillChatLeftTextFill className="text-[1rem] mr-2 sm:text-[1.1rem]" />
                Contact me
              </Button>
            </div>
          </section>

          <GallerySlider />

          <section className="flex mt-12 flex-col py-4 gap-4 justify-start">
            <h2 className="text-2xl font-semibold text-start flex justify-self-start">
              Service Details
            </h2>
            <span className="text-[0.7rem] p-2 bg-orange-100 w-fit">
              PLEASE MESSAGE ME FIRST BEFORE PLACING AN ORDER
            </span>
            <p className="text-sm">
              Car wash is a facility used to clean the exterior and, in some
              cases, the interior of motor vehicles. Car washes can be
              self-serve, fully automated, or full-service with attendants who
              wash the vehicle.
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold">How does it work?</h3>
              <ul className="pl-5">
                <li className="text-[0.77rem] list-disc">
                  Please message me first before ordering! as this service
                  require me come over for evaluation
                </li>
              </ul>
              <ul className="pl-5">
                <li className="text-[0.77rem] list-disc">
                  Evaluation fee of #1000
                </li>
              </ul>
              <ul className="pl-5">
                <li className="text-[0.77rem] list-disc">
                  After evalution and are satisfied you can then proceed to pay
                </li>
              </ul>
              <ul className="pl-5">
                <li className="text-[0.77rem] list-disc">
                  Revision if Needed.
                </li>
              </ul>
              <ul className="pl-5">
                <li className="text-[0.77rem] list-disc">Done.</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col py-4 gap-4  justify-start">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 justify-start rounded-md bg-white px-4 py-6">
              <div className="flex flex-col gap-4 lg:w-full lg:max-w-[75%]">
                <div className="flex justify-between max-w-[12rem] items-center">
                  <h4 className="text-sm font-semibold">Evalution Free</h4>
                  <span className="text-sm">$12</span>
                </div>
                <p className="text-xs">
                  This is a money paid for service provider to come over to an
                  location to evaluate the work before giving qoute if need be
                </p>
              </div>
              <div className="flex justify-start lg:w-full lg:max-w-[25%]">
                <Button
                  variant={"primary"}
                  className="max-w-[10rem] w-full lg:text-sm"
                >
                  Pay Free
                </Button>
              </div>
            </div>
          </section>

          <section className="flex flex-col py-4 gap-4 justify-start">
            <div className="text-2xl font-semibold">
              Service Listing & Pricing
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-between rounded-md bg-white px-4 py-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold">
                    Full plumbing service for new building
                  </h4>
                </div>
                <p className="text-sm">#2300</p>
              </div>
              <div className="flex justify-start">
                <Button
                  variant={"primary"}
                  className="max-w-[90%] lg:max-w-[95%] mx-auto w-full lg:text-xs"
                >
                  Select Service
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-between rounded-md bg-white px-4 py-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold">
                    Full plumbing service for new building
                  </h4>
                </div>
                <p className="text-sm">#2300</p>
              </div>
              <div className="flex justify-start">
                <Button
                  variant={"primary"}
                  className="max-w-[90%] lg:max-w-[95%] mx-auto w-full lg:text-xs"
                >
                  Select Service
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-between rounded-md bg-white px-4 py-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold">
                    Full plumbing service for new building
                  </h4>
                </div>
                <p className="text-sm">#2300</p>
              </div>
              <div className="flex justify-start">
                <Button
                  variant={"primary"}
                  className="max-w-[90%] lg:max-w-[95%] mx-auto w-full lg:text-xs"
                >
                  Select Service
                </Button>
              </div>
            </div>
          </section>

          <ProviderReviewsSlider />
        </div>
        <div className="flex w-full flex-col gap-6 md:max-w-[50%] xl:max-w-[40%]">
          <div className="flex gap-3 justify-start items-center">
            <Button variant={"whiteAfrunaButton"} className="text-xs ">
              {" "}
              <BsHeartFill className="mr-1 text-[#A7B7DD]" />
              Favourite
            </Button>
            <Button variant={"whiteAfrunaButton"} className="text-xs">
              {" "}
              <BsShareFill className="mr-1" />
              Share
            </Button>
            <Button variant={"whiteAfrunaButton"} className="text-xs">
              Report
            </Button>
          </div>
          <div className="flex py-10 px-8 bg-white xl:max-w-[90%] w-full flex-col gap-1 rounded-lg">
            <h3 className="text-2xl font-semibold">Service Availability</h3>{" "}
            <div className="flex justify-between mt-6 font-semibold">
              <span className="text-xs">Monday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Tuesday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Wednesday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Thursday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Friday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Saturday</span>
              <p className="flex text-afruna-gray text-xs">
                09 : 30 AM to 07 : 30 PM
              </p>
            </div>
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-xs">Sunday</span>
              <p className="flex text-red-600 text-xs">Closed</p>
            </div>
            <div className="flex justify-center mt-10 ">
              <Button variant={"primary"} className="max-w-[15rem]  w-full">
                Book Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-2 px-4 lg:px-32 pt-12 w-full pb-16">
        <div className="flex flex-col gap-2">
          <h3 className=" text-orange-400 text">SERVICES</h3>
          <h1 className="flex text-3xl font-extrabold text-afruna-blue">
            Similar Providers
          </h1>
        </div>
        <div className="flex flex-wrap justify-start gap-6 mt-8 lg:mt-10">
          {providers.slice(0, 3).map((item) => {
            return <ProviderCard key={item.rating} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default page;
