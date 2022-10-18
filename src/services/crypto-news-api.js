import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const newsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'f4afc507bbmshd68927d4c674498p162485jsn2e29a098c196',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
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