import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import Cookies from "js-cookie";
import { ICategoriesResponse } from "@/interfaces";
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: async (headers) => {
      headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCategories: build.query<ICategoriesResponse, void>({
      query: () => "/servicecategories",
    }),
    getCategoriesByPagination: build.query<ICategoriesResponse, number>({
      query: (page: number) => `/servicecategories?page=${page}`,
    }),
    getCategoriesByCounts: build.query<ICategoriesResponse, number>({
      query: (limit: number) => `/servicecategories?limit=${limit}`,
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

export const {
  useGetCategoriesQuery,
  useGetCategoriesByCountsQuery,
  useLazyGetCategoriesByPaginationQuery,
} = categoryApi;
