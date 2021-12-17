import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const UiReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-forest-29072.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ mb: 5 }} style={{ marginTop: "-300px" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {reviews.map((review) => (
              <Grid key={review._id} item xs={4} sm={8} md={4}>
                <Card sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", width: "auto", height: 1 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      <q>{review.desc}</q>
                    </Typography>
                    <Typography variant="h5" component="div">
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star rating-color"
                        fullSymbol="fas fa-star rating-color"
                        readonly
                      ></Rating>
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ mx: 3 }}>
                        <CardMedia component="img" style={{ width: "70px", height: "70px", borderRadius: "50%" }} image={review.img} alt="" />
                      </Box>
                      <Box>
                        <Typography variant="h5">{review.name}</Typography>
                        <Typography color="text.secondary" variant="p">
                          {review.profession}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UiReview;
