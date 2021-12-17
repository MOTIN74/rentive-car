import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Aos from "aos";
Aos.init({
  duration: "2000",
});

const Misson = () => {
  return (
    <React.Fragment>
      <Box style={{ background: "#F1F1F1", padding: "150px 0" }}>
        <Container>
          <Grid style={{ background: "white" }} sx={{ p: 3, boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box data-aos="fade-right">
                <Typography variant="h6" color="orange" sx={{ pt: 5 }}>
                  What we do
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                  Our Mission
                </Typography>{" "}
                <Typography variant="p">
                  AAA Luxury and Sport Car Rental team is glad to inform you that the Lamborghini Huracan Performante rental will be soon available in
                  our agencies Cannes, Paris, Monaco, Hamburg, Geneva, London, Nice, and Saint Tropez with possibility to be delivered...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <Box data-aos="fade-left">
                <CardMedia
                  component="img"
                  sx={{ width: "100%", background: "yellow" }}
                  image="https://i.ibb.co/W282nJH/car-PKLVJ3-K-800x403.png"
                  alt="car"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Misson;
