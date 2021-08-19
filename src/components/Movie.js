import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  card: {
    // maxHeight: "450px",
    height: "420px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",

    color: theme.palette.text.secondary,
  },
}));

const Movie = (movies) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          {movies.movies.Search &&
            movies.movies.Search.map((movie, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="300"
                      image={movie.Poster}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {movie.Title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Release Year : {movie.Year}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Movie;
