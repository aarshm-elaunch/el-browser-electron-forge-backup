import { logOut } from "../slices/authSlice"
import { rootApiSlice } from "./rootApiSlice"

export const authApiSlice = rootApiSlice.injectEndpoints({
    endpoints: builder => ({
        getMyAccount: builder.query<any, void>({
            query: () => ({
                url: "/auth/my-account",
                method: "GET"
            })
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
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useGetMyAccountQuery
} = authApiSlice 
