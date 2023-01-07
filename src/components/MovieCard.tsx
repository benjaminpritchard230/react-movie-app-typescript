import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { IMovie } from "../App";

import CardMedia from "@mui/material/CardMedia";
import MovieDialog from "./MovieDialog";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const imageUrl: string = movie.poster_path
    ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
    : "https://via.placeholder.com/250x375/?text=No+Image+Available/";

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Grid item xs={12} md={3} lg={2} sx={{ minHeight: "100%" }}>
      <Item sx={{ m: 0.5 }}>
        <Card sx={{ height: "100%" }}>
          <CardActionArea
            onClick={() => {
              handleClick();
            }}
          >
            <CardMedia
              sx={{ width: "100%", minHeight: "375px" }}
              component="img"
              image={imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
      <MovieDialog open={open} setOpen={setOpen} key={movie.id} movie={movie} />
    </Grid>
  );
};

export default MovieCard;
