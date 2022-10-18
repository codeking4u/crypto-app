import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_NEWS_API_BASE_URL;

const newsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_API_HOST
}

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (count = 50, newsCategory = "crypto") => ({ url: `/news/search/?q=${newsCategory}&safeSearch=off&textFormat=raw&freshness=Day&count=${count}`, headers: newsHeader })
        })
    })
});

export const { useGetNewsQuery } = cryptoNewsApi