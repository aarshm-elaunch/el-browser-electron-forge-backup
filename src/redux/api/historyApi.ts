import { GetAccountHistoryParams, HistoryData, PostAccountHistoryParams } from "../../types/data";
import { rootApiSlice } from "./rootApiSlice";

export const authApiSlice = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccountHistory: builder.query<HistoryData, GetAccountHistoryParams>({
      query: ({ limit, page, search }) => ({
        url: `/history/all?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    postAccountHistory: builder.mutation<any, PostAccountHistoryParams>({
      query: (log) => ({
        url: "/history/log",
        method: "POST",
        body: { ...log },
      }),
    }),
  }),
});

export const { useGetAccountHistoryQuery, usePostAccountHistoryMutation } = authApiSlice;
