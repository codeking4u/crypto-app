import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST

}

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count = 50) => ({ url: `/coins?limit=${count}`, headers: cryptoApiHeaders })
        })
    })
});

export const {
    useGetCryptosQuery
} = cryptoApi