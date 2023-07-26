import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '1ff3fff75bmshb99e1f81929412ap1aab53jsn9cee6f1a361d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
//uitlity funtion
const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos : builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails : builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory : builder.query({
            query: ({uuid,timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
        }),
        getReferenceCurrencies: builder.query({
            query: () => createRequest(`/reference-currencies?limit=100`),
        }),
    })
});


export const{ useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,useGetReferenceCurrenciesQuery, } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '1ff3fff75bmshb99e1f81929412ap1aab53jsn9cee6f1a361d',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };