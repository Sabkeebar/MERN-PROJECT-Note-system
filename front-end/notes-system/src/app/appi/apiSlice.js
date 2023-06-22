import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3501' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})