"use client";

import { imgs } from "@/constants/images";
import Image from "next/image";
import { FC, ReactNode, useRef } from "react";
import { FileInputButton } from "@files-ui/react";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "react-international-phone";
import ReactFlagsSelect from "react-flags-select";
import "react-international-phone/style.css";
import { FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const {
    formState: { errors },
  } = useForm();
  const inputAdressRef = useRef<HTMLInputElement | null>(null);
  return (
    <section className="flex flex-col gap-6 max-w-[94%] md:max-w-[100%] mx-auto">
      <h1 className="text-xl lg:text-2xl leading-3 text-afruna-blue font-bold">
        My Profile
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 w-full bg-white p-6 md:max-w-[75%] rounded-xl drop-shadow">
          <div className="flex lg:pl-6 lg:pt-4 gap-2 sm:gap-3 justify-start items-end">
            <div className="w-[4.5rem] h-[4.5rem] sm:w-[5rem] sm:h-[5rem] lg:w-[7.5rem] lg:h-[7.5rem] shadow rounded-full overflow-hidden relative flex justify-center items-center">
              <Image src={imgs.seller1} alt="Your image" fill />
            </div>
            <div className="flex flex-col justify-end items-start gap-1">
              <h4 className="font-semibold text-[0.9rem] lg:text-lg text-start p-2 leading-3">
                Akande Idris
              </h4>
              <FileInputButton className=" py-2 max-w-[10rem] w-full text-white bg-gradient-to-b from-blue-400 to-blue-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 transition duration-500 rounded">
                <span className="capitalize font-semibold text-xs sm:text-sm lg:text-base">
                  Upload
                </span>
                <span className="lowercase font-semibold px-1 text-xs sm:text-sm lg:text-base">
                  {" "}
                  a{" "}
                </span>
                <span className="capitalize font-semibold text-xs sm:text-sm lg:text-base">
                  Photo
                </span>
              </FileInputButton>
            </div>
          </div>
          <div className="w-full h-[1px] lg:flex border border-[#D1D1D1]" />
          <form className="w-full max-w-[93%] mx-auto lg:gap-y-8 pb-10 lg:pb-12 flex gap-2 lg:gap-5 flex-col">
            <div className="flex gap-2 lg:gap-x-8 flex-col w-full lg:flex-row">
              <fieldset className="w-full">
                <label
                  htmlFor={"firstName"}
                  className="text-sm font-semibold text-[#232F3E] leading-6"
                >
                  {`First Name`}
                </label>
                <div
                  className={`flex mt-1 justify-between items-center border-[2px] focus-within:border-[2px] focus-within:border-[#FFDBB6] focus-within:shadow-md w-full text-sm
                          font-semibold text-gray-500 rounded-md placeholder:text-gray-400 focus-visible:shadow-md 
                          transition duration-300 sm:text-sm sm:leading-6 
                          `}
                >
                  <input
                    id={"firstName"}
                    type={"text"}
                    value={' Akande '}
                    autoComplete={"firstName"}
                    onChange={() => {}}
                    className="w-full bg-transparent px-2 py-[0.4rem] sm:py-2"
                  />
                </div>
              </fieldset>
              <fieldset className="w-full">
                <label
                  htmlFor={"lastName"}
                  className="text-sm font-semibold text-[#232F3E] leading-6"
                >
                  {`Last Name`}
                </label>
                <div
                  className={`flex mt-1 justify-between items-center border-[2px] focus-within:border-[2px] focus-within:border-[#FFDBB6] focus-within:shadow-md w-full text-sm
                          font-semibold text-gray-500 rounded-md placeholder:text-gray-400 focus-visible:shadow-md 
                          transition duration-300 sm:text-sm sm:leading-6 
                          `}
                >
                  <input
                    id={"lastName"}
                    type={"text"}
                    value={'Idris'}
                    autoComplete={"lastName"}
                    onChange={() => {}}
                    className="w-full bg-transparent px-2 py-[0.4rem] sm:py-2"
                  />
                </div>
              </fieldset>
            </div>
            <fieldset className="w-full lg:max-w-[47.4%]">
              <label
                htmlFor={"email"}
                className="text-sm font-semibold text-[#232F3E] leading-6"
              >
                {`Email address`}
              </label>
              <div
                className={`flex mt-1 justify-between items-center border-[2px] focus-within:border-[2px] focus-within:border-[#FFDBB6] focus-within:shadow-md w-full text-sm
                          font-semibold text-gray-500 rounded-md placeholder:text-gray-400 focus-visible:shadow-md 
                          transition duration-300 sm:text-sm sm:leading-6 
                          `}
              >
                <input
                  id={"email"}
                  type={"email"}
                  autoComplete={"email"}
                  value={'dris@gmail.com'}
                  onChange={() => {}}
                  className="w-full bg-transparent px-2 py-[0.4rem] sm:py-2"
                />
              </div>
            </fieldset>
            {/* <div className="flex mt-4 mb-6 sm:mb-8 lg:mb-10 justify-center lg:justify-end lg:mt-8 items-center">
                      <Button className="border rounded-md border-[#FF9E3A] hover:scale-90 duration-500 transition-all">
                        Update Information
                      </Button>
                    </div> */}
          </form>
        </div>
        <div className="flex flex-col gap-8 w-full bg-white p-6 md:max-w-[75%] rounded-xl drop-shadow">
          <div className="flex lg:pl-6 lg:pt-4 justify-start items-end text-2xl font-bold text-afruna-blue">
            Contact Information
          </div>
          <div className="w-full h-[1px] lg:flex border border-[#D1D1D1]" />

          <form className="w-full max-w-[93%] mx-auto lg:gap-y-8 pb-10 lg:pb-12 flex gap-2 lg:gap-5 flex-col">
            <div className="flex gap-2 flex-col lg:gap-x-8 w-full lg:flex-row">
              <fieldset className="w-full">
                <label
                  htmlFor={"phoneNumber"}
                  className="text-sm font-semibold text-[#232F3E] leading-6"
                >
                  Phone Number
                </label>
                {/* <div
                          className={`mt-1 flex justify-center items-center gap-2`}
                        > */}
                <PhoneInput
                  defaultCountry="ng"
                  inputStyle={{
                    border: "none",
                    width: "100%",
                    padding: "0.5rem",
                    // paddingRight: '1rem',
                    // marginRight: '1rem',
                  }}
                  // onChange={}
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      border: "none",
                      marginLeft: "0.7rem",
                      marginTop: "0.21rem",
                      marginBottom: "0.21rem",
                    },
                  }}
                  // value={
                  // }
                  charAfterDialCode="-"
                  placeholder="phone number"
                  className="flex mt-1 justify-between items-center border-[2px] focus-within:border-[2px] focus-within:border-[#FFDBB6] focus-within:shadow-md w-full
                         font-semibold text-xs text-gray-400 rounded-md placeholder:text-gray-300 focus-visible:shadow-md 
                          transition duration-300 sm:text-sm sm:leading-6"
                />
                {/* {!isPhoneValid && (
                          <span
                            ref={phoneValidationRef}
                            className="text-rose-500 block text-xs bg-white rounded-sm w-fit pl-1"
                          ></span> */}
                {/* )} */}
              </fieldset>

              <fieldset className="w-full">
                <label
                  htmlFor={"country"}
                  className="text-sm font-semibold text-[#232F3E] leading-6"
                >
                  Country of Resident
                </label>
                <ReactFlagsSelect
                  id="country"
                  searchable
                  onSelect={(value) => console.log(value)}
                  selected={"dd"}
                  selectButtonClassName="py-3"
                  className="myCustomFlagsSelect mb-0 mt-1 "
                />
                {/* {country.Name === "" && (
                          <span
                            ref={countryRef}
                            className="text-rose-500 block text-xs bg-white rounded-sm w-fit pl-1"
                          ></span>
                        )} */}
              </fieldset>
            </div>

              <fieldset className="w-full lg:max-w-[48%]">
                <label
                  htmlFor={"address1"}
                  className="text-sm font-semibold text-[#232F3E] leading-6"
                >
                  {"Address"}
                </label>
                <div
                  className={`flex mt-1 justify-between items-center border-[2px] focus-within:border-[2px] focus-within:border-[#FFDBB6] focus-within:shadow-md w-full text-sm
                  font-semibold text-gray-600 rounded-md placeholder:text-gray-400 focus-visible:shadow-md 
                  transition duration-300 sm:text-sm sm:leading-6 
                  `}
                >
                  <input
                    id={"address"}
                    type={"text"}
                    placeholder={" Enter your address"}
                    autoComplete={"address"}
                    // disabled={disabled}
                    // {...register('address1', { required: true  })}
                    className="w-full bg-transparent px-2 py-2"
                  />
                  {
                    <div
                      onClick={() => inputAdressRef.current?.focus()}
                      className="cursor-pointer w-[3rem] flex justify-center items-center"
                    >
                      <FaPen className="text-sm text-slate-500" />
                    </div>
                  }
                </div>
                {errors["address1"] && (
                  <span className="text-rose-500 block mt-1 bg-red-100 rounded-sm w-fit p-1">
                    {errors["address1"]?.message as ReactNode}
                  </span>
                )}
              </fieldset>

            <div className="flex mt-4 mb-6 sm:mb-8 lg:mb-10 justify-center lg:justify-end lg:mt-8 items-center">
              <button
                type="button"
                className={`hover:scale-95 border py-2 bg-white rounded-md border-[#FF9E3A] duration-500 transition-all max-w-[11.3rem] w-full`}
              >
                {"Update Contact"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
