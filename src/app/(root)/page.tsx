import Landingbannar from "@/components/Landingbannar";
import { ProviderCard } from "@/components/ProviderCard";
import ServicesCard from "@/components/ServicesCard";
import { Button } from "@/components/ui/button";
import {
  feautureCategories,
  operationMethods,
  services,
} from "@/constants/data";
import { imgs } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Landingbannar />
      {/* black friday section */}
      <section className="pt-10 pb-4">
        <div className="flex flex-col max-w-[93%] mx-auto">
          <div className="relative flex justify-center items-center h-[15rem]">
            <div className="w-full h-full overflow-hidden relative">
              <Image src={imgs.blackFriday1} alt="partner" priority fill />
            </div>
            <Button
              variant={"whiteButton"}
              className="absolute bottom-0 right-0"
            >
              Discover
            </Button>
          </div>
          <div className="relative flex justify-center items-center h-[15rem]">
            <div className="w-full h-full overflow-hidden relative">
              <Image src={imgs.blackFriday2} alt="partner" priority fill />
            </div>
            <Button className="absolute bottom-0 right-0">Discover</Button>
          </div>
        </div>
      </section>
      {/* featured categories section */}
      <section className="flex flex-col gap-2 max-w-[90%] w-full mx-auto pb-8">
        <h3 className=" text-orange-400 text">CATEGORIES</h3>
        <h1 className="flex text-3xl font-extrabold text-afruna-blue">
          Featured Categories
        </h1>
        <p className="text-afruna-gray">What services do you need?</p>
        <div className="flex flex-col gap-4 mt-4 ">
          {feautureCategories.map(({ img, text }) => {
            return (
              <div
                key={text}
                className="flex flex-col gap-4 rounded-lg bg-white py-10 justify-center items-center"
              >
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-[#FEE4CA]">
                  <div className="flex justify-center items-center h-[2.5rem] w-[2.5rem]">
                    <div className="w-full h-full overflow-hidden relative">
                      <Image src={img} alt="category" priority fill />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-extrabold capitalize">{text}</p>
              </div>
            );
          })}
        </div>
        <Button variant={"link"} className="my-4">
          Explore more categories{" "}
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl ml-2" />
        </Button>
      </section>
      {/* operate section */}
      <section className="flex flex-col gap-2 px-4 pt-12 relative bg-[#F1F5F9] w-full mx-auto pb-16">
        <h3 className=" text-orange-400 text">AFRUNA</h3>
        <h1 className="flex text-3xl font-extrabold text-afruna-blue">
          How it works
        </h1>
        <div className="flex justify-start items-center max-w-[80%] gap-1 bg-white rounded-full">
          <Button
            variant={"primary"}
            className=" w-full rounded-full max-w-[8rem]"
          >
            Users
          </Button>
          <Button variant={"whiteButton"} className=" rounded-full">
            Service Provider
          </Button>
        </div>
        <div className="flex flex-wrap gap-10 mt-8 ">
          {operationMethods.map(({ text, title }) => {
            return (
              <div
                key={title}
                className="flex flex-col text-center px-4 gap-4 font-semibold rounded-lg bg-white py-12 justify-center items-center"
              >
                <h2 className="font-extrabold">{title}</h2>
                <p className="text-sm text-afruna-blue">{text}</p>
              </div>
            );
          })}
        </div>
        <div className=" absolute top-[21rem] right-5 ">
          <div className="h-[5rem] w-[2.5rem] overflow-hidden relative flex justify-center items-center">
            <Image src={imgs.operate1} alt="operate" priority fill />
          </div>
        </div>
        <div className="md:hidden absolute bottom-[12.5rem] left-5  ">
          <div className="h-[5rem] w-[2rem] overflow-hidden relative flex justify-center items-center">
            <Image src={imgs.operate2} alt="operate" priority fill />
          </div>
        </div>
      </section>
      {/* popular services section */}
      <section className="flex flex-col gap-2 px-4 pt-12 relative bg-[#FFFDFB] w-full mx-auto pb-16">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className=" text-orange-400 text">SERVICES</h3>
            <h1 className="flex text-3xl font-extrabold text-afruna-blue">
              Popular Services
            </h1>
            <p className=" text-afruna-blue">What services do you wants?</p>
          </div>
          <div className="flex justify-start items-center max-w-[80%] gap-1 bg-white rounded-full">
            <Button
              variant={"yellowOutlineButton"}
              className=" w-full rounded-full max-w-[8rem]"
            >
              View All{" "}
              <MdOutlineKeyboardDoubleArrowRight className="text-2xl ml-2" />
            </Button>
            <Link href={"/"}>View</Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-8 ">
          {services.map((item) => {
            return <ServicesCard key={item.services} item={item} />;
          })}
        </div>
      </section>
      {/* services provider section */}
      <section className="flex flex-col gap-2 px-4 pt-12 relative bg-[#FFFDFB] w-full mx-auto pb-16">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className=" text-orange-400 text">The owners</h3>
            <h1 className="flex text-3xl font-extrabold text-afruna-blue">
              Services Provider
            </h1></div>
          <div className="flex justify-start items-center max-w-[80%] gap-1 bg-white rounded-full">
            <Button
              variant={"yellowOutlineButton"}
              className=" w-full rounded-full max-w-[8rem]"
            >
              View All{" "}
              <MdOutlineKeyboardDoubleArrowRight className="text-2xl ml-2" />
            </Button>
            <Link href={"/"}>View</Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-8 ">
          {services.map((item) => {
            return <ProviderCard key={item.services} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}
