import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { RootState } from "./app/store";
import SearchAppBar from "./components/SearchAppBar";
import SearchTextCard from "./components/SearchTextCard";
import { useGetMovieSearchQuery } from "./features/api/apiSlice";

type Props = {};

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
  const searchText = useSelector((state: RootState) => state.search.text);

  const {
    data: movieResults,
    error,
    isError,
    isLoading,
  } = useGetMovieSearchQuery(searchText);

  const displayImagePosts = () => {
    if (movieResults) {
      return movieResults.results.map((movie: any) => <li>{movie.title}</li>);
    } else {
      return "Log in to view private posts.";
    }
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <SearchAppBar />
        <SearchTextCard />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {displayImagePosts()}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
