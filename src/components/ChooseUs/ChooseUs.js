import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CountUp from "react-countup";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <React.Fragment>
      <Container className="chooseUs">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {" "}
            <CardMedia
              sx={{ width: 1 }}
              component="img"
              image="https://i.ibb.co/2KbF2ft/happy-couple-with-car-key-standing-at-car-in-dealership-salon-e1616384906835.jpg"
              alt="Paella dish"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="choose-box" sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.2)", p: 3 }}>
              <Typography variant="body2" sx={{ color: "blue", my: 2 }}>
                WHY CHOOSE US
              </Typography>{" "}
              <Typography variant="h3" sx={{ fontWeight: "500" }}>
                We Provide Premium Car With High Quality
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary" sx={{ my: 5 }}>
                Your blog will reflect your dealership brand, the vehicle brands on sale, and the services that you offer. Craft relevant and
                informative blogs that has the potential to attract your local prospects. Why not go for guest posts, preferably from a popular local
                personality?
              </Typography>
              <Button className="btn-custom" sx={{ color: "white", py: 1, px: 3, borderRadius: 0 }}>
                Read More
              </Button>
            </Box>
            <Box sx={{ display: "flex", m: 3, textAlign: "center", justifyContent: "space-around", alignItems: "center" }}>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                  <CountUp duration={4} start={1} end={27} />
                  <sup style={{ color: "#FFDD00" }}>+</sup>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Years of Experience
                </Typography>
              </Box>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                  <CountUp duration={4} start={1} end={548} />
                  <sup style={{ color: "#FFDD00" }}>+</sup>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Sales Completed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ChooseUs;
