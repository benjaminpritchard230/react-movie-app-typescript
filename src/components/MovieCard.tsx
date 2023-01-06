import { Grid } from "@mui/material";
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

  const imageUrl: string = `https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{ m: 0.5 }}>
        <Card sx={{ minHeight: 150 }}>
          <CardMedia component="img" image={imageUrl} alt="green iguana" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {movie.title}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Item>
    </Grid>
  );
};

export default MovieCard;
