import { StaticImageData } from "next/image";

export interface IAfrunaPartner {
  _id: string,
  img: StaticImageData;
}
export interface IService {
  img1: StaticImageData,
  services: string,
  des: string,
  location: string,
  rating: string,
  price: string
}
