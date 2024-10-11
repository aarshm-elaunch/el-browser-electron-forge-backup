import { Generate2faSecretResponse } from "../../types/data"
import { logOut } from "../slices/authSlice"
import { rootApiSlice } from "./rootApiSlice"

export const authApiSlice = rootApiSlice.injectEndpoints({
    endpoints: builder => ({
        getMyAccount: builder.query<any, void>({
            query: () => ({
                url: "/auth/my-account",
                method: "GET"
            }),
            providesTags: ['Account']
        }),
        register: builder.mutation<any, { email: string, password: string, name: string }>({
            query: credentials => ({
                url: '/auth/register',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        login: builder.mutation<any, { email: string, password: string }>({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        logout: builder.mutation<any, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    setTimeout(() => {
                        dispatch(logOut(null))
                    }, 1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        verify2fa: builder.mutation<any, { email: string, code: string }>({
            query: (credentials) => ({
                url: '/auth/2fa/verify',
                method: 'POST',
                body: { ...credentials }
            }),
        }),
        generate2faSecret: builder.query<Generate2faSecretResponse, void>({
            query: () => ({
                url: "/auth/2fa/generate-secret",
                method: "GET"
            })
        }),
        enable2fa: builder.mutation<any, { code: string }>({
            query: (credentials) => ({
                url: '/auth/2fa/enable',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ["Account"]
        }),
        disable2fa: builder.mutation<any, { code: string }>({
            query: (credentials) => ({
                url: '/auth/2fa/disable',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ["Account"]
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useGetMyAccountQuery,
    useVerify2faMutation,
    useGenerate2faSecretQuery,
    useEnable2faMutation,
    useDisable2faMutation
} = authApiSlice 
