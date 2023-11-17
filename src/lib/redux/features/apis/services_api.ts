import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import Cookies from "js-cookie";
import { IService } from "@/interfaces/data.interface";
import { IServicesResponse } from "@/interfaces";
export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: async (headers) => {
      headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getServices: build.query<IServicesResponse, void>({
      query: () => "/services",
      
    }),
    getServicesByCount: build.query<IServicesResponse, number>({
      query: (count:number) => `/services?limit=${count}`,
    }),
    getServicesByPage: build.query<IServicesResponse, number>({
      query: (page:number) => `/services?page=${page}`,
    }),
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.payload) {
      // when persisting the root reducer
      if (reducerPath && action.type === REHYDRATE) {
        return action?.payload[reducerPath];
      }
      // when persisting the api reducer
      if (action.type === REHYDRATE && action.key === "root") {
        return action.payload;
      }
    }
  },
});

export  const {useGetServicesByCountQuery,useGetServicesQuery,useGetServicesByPageQuery} = servicesApi;
