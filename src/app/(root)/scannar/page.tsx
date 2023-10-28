"use client";

import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [show, setShow] = useState<Boolean>(true);
  return (
    <main className="pt-10 pb-8 w-full flex flex-col justify-center items-center gap-4">
      {!show ? (
        <>
          <div className="w-[15rem] h-[15rem] overflow-hidden relative rounded-md flex justify-center items-center">
            <Image src={imgs.QRcode} alt="partner" priority fill />
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div
              onClick={() => setShow(true)}
              className="w-[3rem] h-[3rem] overflow-hidden relative rounded-full flex justify-center items-center"
            >
              <Image src={imgs.cam1} alt="partner" priority fill />
            </div>
            <div className="w-[2rem] h-[2rem] overflow-hidden relative rounded-full flex justify-center items-center">
              <Image src={imgs.cam2} alt="partner" priority fill />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-bold text-2xl text-center max-w-[80%] w-full mx-auto">
            Verified Afruna Provider
          </h1>
          <div className="flex w-full max-w-[80%] mx-auto">
            <span className="text-lg font-semibold flex justify-start w-full">
              Name
            </span>
            <span className="text-lg font-semibold flex justify-start w-full">
              Jamal Hayama
            </span>
          </div>
          <div className="flex w-full max-w-[80%] mx-auto">
            <span className="text-lg font-semibold flex justify-start w-full">
              Service
            </span>
            <span className="text-lg font-semibold flex justify-start w-full">
              Cleaning
            </span>
          </div>
          <div className="flex w-full"></div>
          <div className="w-[15rem] h-[20rem] overflow-hidden relative flex justify-center items-center">
            <Image src={imgs.photo} alt="partner" priority fill />
          </div>
        </>
      )}
    </main>
  );
};

export default page;
