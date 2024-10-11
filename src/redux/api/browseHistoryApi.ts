import { GetAccountHistoryParams, HistoryData, PostAccountHistoryParams } from "../../types/data";
import { rootApiSlice } from "./rootApiSlice";

export const authApiSlice = rootApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccountHistory: builder.query<HistoryData, GetAccountHistoryParams>({
            query: ({ limit, page, search, dateRange }) => ({
                url: `/browse-history/all?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}&dateRange=${dateRange}`,
                method: "GET",
            }),
        }),
        postAccountHistory: builder.mutation<any, PostAccountHistoryParams>({
            query: (log) => ({
                url: "/browse-history/log",
                method: "POST",
                body: { ...log },
            }),
        }),
    }),
});

export const { useGetAccountHistoryQuery, usePostAccountHistoryMutation } = authApiSlice;
