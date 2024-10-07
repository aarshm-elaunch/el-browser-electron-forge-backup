import { HistoryData } from "src/types/data"
import { GetAccountHistoryParams } from "../../types/data"
import { rootApiSlice } from "./rootApiSlice"

export const authApiSlice = rootApiSlice.injectEndpoints({
  endpoints: builder => ({
    getAccountHistory: builder.query<HistoryData, GetAccountHistoryParams>({
      query: ({ limit, page, search }) => ({
        url: `/history/all?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`,
        method: "GET"
      })
    })
  })
})

export const {
  useGetAccountHistoryQuery
} = authApiSlice



