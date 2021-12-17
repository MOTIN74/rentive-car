import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

const News = () => {
  return (
    <React.Fragment>
      <Container sx={{ py: 5 }}>
        <Typography variant="p" sx={{ fontWeight: "bold", mt: 5, color: "orange" }} component="div">
          OUR NEWS
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: "500", mb: 5, pb: 5 }} component="div">
            Latest News
          </Typography>
          <Box style={{ textDecoration: "none" }}>
            <Button sx={{ background: "#FFDD00", color: "black", px: 5, mb: 5 }}>View All</Button>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }}>
                <CardActionArea>
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                      className="imgNews"
                      component="img"
                      sx={{ width: 1 }}
                      image="https://i.ibb.co/RyLhF5B/couple-with-catalog-buying-car-at-dealership-salon-e1616637267577.jpg"
                      alt="green iguana"
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Tayata Car Decline Over Shadows Light-Truck Gain
                    </Typography>
                    <Typography variant="body2" sx={{ my: 3 }} color="text.secondary">
                      <i className="far fa-calendar-alt"></i> 09-Nov-2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue
                      magnain...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }}>
                <CardActionArea>
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                      className="imgNews"
                      component="img"
                      sx={{ width: 1 }}
                      image="https://i.ibb.co/pd1808B/smiling-man-holding-safety-belt-in-car-and-looking-away.jpg
                    "
                      alt="green iguana"
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dealer Agency Warns Car Makers On Tesla Boast
                    </Typography>
                    <Typography variant="body2" sx={{ my: 3 }} color="text.secondary">
                      <i className="far fa-calendar-alt"></i> 09-Nov-2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue
                      magnain...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <Card sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }}>
                <CardActionArea>
                  <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                      className="imgNews"
                      component="img"
                      sx={{ width: 1 }}
                      image="https://i.ibb.co/nCmGd04/man-wants-to-rent-a-car.jpg"
                      alt="green iguana"
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Rent A Car So Easiest With A Few Minutes From Rentive
                    </Typography>
                    <Typography variant="body2" sx={{ my: 3 }} color="text.secondary">
                      <i className="far fa-calendar-alt"></i> 09-Nov-2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duis dictum vestibulum ante vitae ullamcorper. Ristique phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue
                      magnain...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default News;
