import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'shared/constants';
import { QueryParams } from '../types/moviesListTypes';
import { MovieById, MovieResponse } from 'shared/types';

export const api = createApi({
  reducerPath: 'requestsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, QueryParams>({
      query: ({ title, page }) => `&s=${title}&page=${page}`,
    }),
    getMovieById: builder.query<MovieById, string>({
      query: (id) => `&i=${id}&plot=short`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = api;

export const { getMovies, getMovieById } = api.endpoints;
