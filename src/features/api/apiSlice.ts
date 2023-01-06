import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const apiKey: string = "9fb5564d1a088cb776b062fc755ea04e";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovieSearch: builder.query({
      query: (searchText: string) =>
        `search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieSearchQuery } = movieApi;
