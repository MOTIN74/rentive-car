import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./Bannar.css";

const Banner = () => {
  return (
    <Box className="banner" sx={{ color: "white", display: "flex", alignItems: "center" }}>
      <Container>
        <Typography variant="h6" color="orange" sx={{ pt: 5 }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("THE ALL NEW").pauseFor(1000).deleteAll().typeString("THE ALL NEW").start();
            }}
          />
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 5 }}>
          Easy For <br /> You To Rent A Car
        </Typography>{" "}
        <Typography variant="p">
          AAA Luxury and Sport Car Rental team is glad to inform you that the Lamborghini Huracan Performante <br /> rental will be soon available in
          our agencies ( Cannes, Paris, Monaco, Hamburg, Geneva, London, Nice, and Saint Tropez) with possibility to be delivered in many places
          accross Europe.
        </Typography>
        <Link to="/explore" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="inherit" className="btn-custom" sx={{ display: "block", py: 2, px: 5, mt: 3 }}>
            Purchase Now
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Banner;
