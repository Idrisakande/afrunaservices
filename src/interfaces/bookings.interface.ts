export interface IBooking {
  serviceId: string;
  customerId: string;
  providerId: string;
  amount: string;
  location: string;
  status: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export interface IBookingResponse {
  success: boolean;
  message: string;
  data: IBooking;
}
export interface IBookingsResponse {
  success: boolean;
  message: string;
  data: IBooking[];
}
