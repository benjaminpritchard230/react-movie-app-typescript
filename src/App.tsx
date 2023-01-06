import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { RootState } from "./app/store";
import MovieCard from "./components/MovieCard";
import SearchAppBar from "./components/SearchAppBar";
import SearchTextCard from "./components/SearchTextCard";
import { useGetMovieSearchQuery } from "./features/api/apiSlice";

interface Props {}

export interface IResults {
  page: number;
  results: Array<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const App = (props: Props) => {
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#0057b7",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [theme, setTheme] = useState("light");
  const searchText: string = useSelector(
    (state: RootState) => state.search.text
  );

  const {
    data: movieResults,
    error,
    isError,
    isLoading,
  } = useGetMovieSearchQuery(searchText);

  const displayImagePosts = () => {
    if (movieResults) {
      return movieResults.results.map((movie: IMovie) => (
        <MovieCard movie={movie} key={movie.id} />
      ));
    } else {
      return "Log in to view private posts.";
    }
  };

  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=9fb5564d1a088cb776b062fc755ea04e&language=en-US&query=harry&page=1&include_adult=false";
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <SearchAppBar />
        <SearchTextCard />
        <Grid container spacing={0}>
          {displayImagePosts()}
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
