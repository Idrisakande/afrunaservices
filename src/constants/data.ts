import { IAfrunaPartner } from "@/interface/data.interface";
import { imgs } from "./images";

export const afrunaPartner: IAfrunaPartner[] = [
  {
    _id: "12",
    img: imgs.traveloka,
  },
  {
    _id: "2",
    img: imgs.tiket,
  },
  {
    _id: "1",
    img: imgs.airbnb,
  },
  {
    _id: "3",
    img: imgs.tripadvisor,
  },
];

export const feautureCategories = [
  {
    text: "construction",
    img: imgs.constCategory,
  },
  {
    text: "educaion",
    img: imgs.eduCategory,
  },
  {
    text: "technology",
    img: imgs.tecnCategory,
  },
  {
    text: "personal",
    img: imgs.percategory,
  },
  {
    text: "event",
    img: imgs.eventCategory,
  },
  {
    text: "professional",
    img: imgs.profCategory,
  },
  {
    text: "real estate",
    img: imgs.estateCategory,
  },
  {
    text: "transportation",
    img: imgs.transpCategory,
  },
];

export const operationMethods = [
  {
    title: "Desired Service",
    text: "Collatra auto-generates inventory reports, stores and emails to relevant partners",
  },
  {
    title: "Location",
    text: "Collatra auto-generates inventory reports, stores and emails to relevant partners",
  },
  {
    title: "What Next",
    text: "Collatra auto-generates inventory reports, stores and emails to relevant partners",
  }
];
export const services = [
  {
    img1: imgs.disSer1,
    services: 'Event',
    des: 'Photography/Video Editing',
    location: 'Kaduna',
    rating: '4.7',
    price: '#4200'
  },
  {
    img1: imgs.disSer2,
    services: 'Construction',
    des: 'Building plan & Drawing',
    location: 'Kaduna',
    rating: '5.0',
    price: '#4200'
  },
  {
    img1: imgs.disSer3,
    services: 'Childcare',
    des: 'Babysitting and nanny servicesBabysitting and nanny services',
    location: 'Area 11, Garki Abuja',
    rating: '4.0',
    price: '#10,00'
  },
];
