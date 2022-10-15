import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f4afc507bbmshd68927d4c674498p162485jsn2e29a098c196',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => ({ url: '/coins', headers: cryptoApiHeaders })
        })
    })
});

export const {
    useGetCryptosQuery
} = cryptoApi