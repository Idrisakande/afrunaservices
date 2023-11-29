"use client";

import AddReviewModel from "@/components/AddReviewModel";
import { Button } from "@/components/ui/button";
import { imgs } from "@/constants/images";
import { ICategory, ICategoryResponse, IUser } from "@/interfaces";
import { IService, IServiceResponse } from "@/interfaces/services.interface";
import { IUserResponse } from "@/interfaces/user.interface";
import { useGetBookingsQuery } from "@/lib/redux/features/apis/bookings_api";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import {
  BsFillChatLeftTextFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

interface pageProps {}

const BookingsPage: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {isSuccess,data} = useGetBookingsQuery();
  return (
    <section className="flex flex-col gap-6 max-w-[94%] md:max-w-[100%] mx-auto">
      <h1 className="text-xl pl-2 lg:pl-0 lg:text-2xl leading-3 text-afruna-blue font-bold">
        Bookings
      </h1>
      <div className="flex flex-col gap-4 max-w-[95%] lg:max-w-[100%] mx-auto w-full">
        {/* Booking */}
      {isSuccess? data.data.map((booking) => {
      
      // var providerDetails: IUser;
      // var categoryDetails:ICategory;
      // var serviceDetails:IService;

      // axios.get<IUserResponse>(`/api/users/${booking.providerId}`).then(res => providerDetails = res.data.data);
      // axios.get<IServiceResponse>(`/api/services/${booking.serviceId}`).then(res => serviceDetails = res.data.data);
        
        return (
          <div key={booking._id} className="py-6 px-8 lg:max-w-[90%] flex flex-col lg:gap-8 lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col items-center sm:flex-row lg:max-w-[75%] w-full gap-6">
            <div className="flex justify-center items-center w-full h-[12rem] sm:w-[13rem] sm:h-[9rem]">
              <div className="w-full h-full overflow-hidden relative rounded-md">
                <Image src={imgs.review1} alt="review" priority fill />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-4  w-full">
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] w-full text-black font-bold">
                  Video Editing
                </span>
                <span className="sm:text-sm flex justify-end lg:justify-start text-[0.65rem] lg:max-w-[73%] w-full text-afruna-gray">
                  <p className="bg-rose-100 text-red-700 px-2 py-1 w-fit ">
                    Canceled
                  </p>
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Booking Date
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :January 23, 2023
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Account
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :#1432.00
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs lg:max-w-[27%] w-full text-afruna-blue font-bold">
                  Location
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :Kaduna
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] sm:text-xs w-full text-black font-bold">
                  Provider
                </span>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-start justify-end items-end lg:text-start lg:max-w-[73%] w-full">
                  <div className="flex items-center gap-1">
                    <div className="w-[1.3rem] h-[1.3rem] sm:w-[2rem] sm:h-[2rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-xs text-[0.65rem] text-slate-600">
                      Jahimani Masilala
                    </span>
                  </div>
                  <span className="sm:text-xs text-[0.65rem] text-[#787878]">
                    jahimani@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-7 md:mt-0 sm:justify-start items-center gap-4 lg:max-w-[25%] w-full">
            <Button variant={"primary"} className="px-5 text-xs">
              Re Book
            </Button>
            <Button variant={"skyButton"} className="text-xs">
              Reschedule
            </Button>
          </div>
        </div>
        )
      }):null}
        {/* Booking */}
        {/* <div className="py-6 px-8 lg:max-w-[90%] flex flex-col lg:gap-8 lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col items-center sm:flex-row lg:max-w-[75%] w-full gap-6">
            <div className="flex justify-center items-center w-full h-[12rem] sm:w-[13rem] sm:h-[9rem]">
              <div className="w-full h-full overflow-hidden relative rounded-md">
                <Image src={imgs.review1} alt="review" priority fill />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-4  w-full">
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] w-full text-black font-bold">
                  Video Editing
                </span>
                <span className="sm:text-sm flex justify-end lg:justify-start text-[0.65rem] lg:max-w-[73%] w-full text-afruna-gray">
                  <p className="bg-green-100 text-green-700 px-2 py-1 w-fit ">
                    Completed
                  </p>
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Booking Date
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :January 23, 2023
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Account
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :#1432.00
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs lg:max-w-[27%] w-full text-afruna-blue font-bold">
                  Location
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :Kaduna
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] sm:text-xs w-full text-black font-bold">
                  Provider
                </span>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-start justify-end items-end lg:text-start lg:max-w-[73%] w-full">
                  <div className="flex items-center gap-1">
                    <div className="w-[1.3rem] h-[1.3rem] sm:w-[2rem] sm:h-[2rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-xs text-[0.65rem] text-slate-600">
                      Jahimani Masilala
                    </span>
                  </div>
                  <span className="sm:text-xs text-[0.65rem] text-[#787878]">
                    jahimani@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center text-center">
            <div className="flex justify-center mt-7 md:mt-0 sm:justify-start items-center gap-4 lg:max-w-[25%] w-full">
              <Button variant={"primary"} className="px-5 text-xs">
                Re Book
              </Button>
              <Button variant={"skyButton"} className="text-xs" onClick={() => {
                console.log('clikd');
                setOpen(true)
                
              }}>
                Add review
              </Button>
              <AddReviewModel isOpen={open} onClose={() => setOpen(false)} />
            </div>
            <div className="flex justify-center items-center gap-2 ">
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
            <Link href={""} className="text-xs text-sky-300 w-fit mx-auto ">
              View details
            </Link>
          </div>
        </div> */}
        {/* Booking */}
        {/* <div className="py-6 px-8 lg:max-w-[90%] flex flex-col lg:gap-8 lg:flex-row justify-between w-full bg-white drop-shadow rounded-lg">
          <div className="flex flex-col items-center sm:flex-row lg:max-w-[75%] w-full gap-6">
            <div className="flex justify-center items-center w-full h-[12rem] sm:w-[13rem] sm:h-[9rem]">
              <div className="w-full h-full overflow-hidden relative rounded-md">
                <Image src={imgs.review1} alt="review" priority fill />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-4  w-full">
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] w-full text-black font-bold">
                  Video Editing
                </span>
                <span className="sm:text-sm flex justify-end lg:justify-start text-[0.65rem] lg:max-w-[73%] w-full text-afruna-gray">
                  <p className=" bg-purple-200 text-purple-700 px-2 py-1 w-fit ">
                    In Progress
                  </p>
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Booking Date
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :January 23, 2023
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs  lg:max-w-[27%] w-full text-black font-bold">
                  Account
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :#1432.00
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-xs lg:max-w-[27%] w-full text-afruna-blue font-bold">
                  Location
                </span>
                <span className="text-xs text-end lg:text-start lg:max-w-[73%] w-full text-[#787878]">
                  :Kaduna
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="lg:max-w-[27%] sm:text-xs w-full text-black font-bold">
                  Provider
                </span>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-start justify-end items-end lg:text-start lg:max-w-[73%] w-full">
                  <div className="flex items-center gap-1">
                    <div className="w-[1.3rem] h-[1.3rem] sm:w-[2rem] sm:h-[2rem] overflow-hidden rounded-full relative flex justify-center items-center">
                      <Image src={imgs.seller1} alt="review" priority fill />
                    </div>
                    <span className="sm:text-xs text-[0.65rem] text-slate-600">
                      Jahimani Masilala
                    </span>
                  </div>
                  <span className="sm:text-xs text-[0.65rem] text-[#787878]">
                    jahimani@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center text-center">
            <div className="flex justify-center mt-7 md:mt-0 sm:justify-start items-center gap-4 lg:max-w-[25%] w-full">
              <Button variant={"primary"} className="px-5 text-xs">
                <BsFillChatLeftTextFill className="text-[0.8rem] mr-2 " />
                Chat
              </Button>
              <Button variant={"skyButton"} className="text-xs">
                Cancel
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BookingsPage;
