import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = 'http://localhost:4000/api/';

export const rootApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,credentials:"same-origin"}),
    tagTypes:["auth"],
    endpoints: () => ({})
})
