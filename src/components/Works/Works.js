import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Aos from "aos";

Aos.init({ duration: "2000" });

const Works = () => {
  return (
    <React.Fragment>
      <Container style={{ padding: "100px 0" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="p" sx={{ color: "orange" }}>
            HOW IT WORKS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "500" }}>
            Make It Happens In 4 Steps
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid data-aos="fade-right" item xs={4} sm={4} md={3}>
              <Paper elevation={0} />
              <Box style={{ fontSize: "100px", textAlign: "center" }}>
                <i style={{ padding: "20px", border: "2px solid #FFDD00", color: "grey", marginBottom: "10px" }} className="fas fa-car"></i>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Select Your Car
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                Max Zanan is one of the leading voices in automotive sales, compliance, and optimization. Max is also the best-selling author of
                Perfect Dealership.
              </Typography>
              <Paper />
            </Grid>
            <Grid data-aos="fade-down" item xs={4} sm={4} md={3}>
              <Paper elevation={0} />
              <Box style={{ fontSize: "100px", textAlign: "center" }}>
                <i
                  style={{ padding: "20px", border: "2px solid #FFDD00", color: "lightgrey", marginBottom: "10px" }}
                  className="fas fa-calendar-check"
                ></i>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Booking & Confirm
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                Max Zanan is one of the leading voices in automotive sales, compliance, and optimization. Max is also the best-selling author of
                Perfect Dealership.
              </Typography>
              <Paper />
            </Grid>
            <Grid data-aos="fade-up" item xs={4} sm={4} md={3}>
              <Paper elevation={0} />
              <Box style={{ fontSize: "100px", textAlign: "center" }}>
                <i
                  style={{ padding: "20px", border: "2px solid #FFDD00", color: "lightgrey", marginBottom: "10px" }}
                  className="fas fa-money-check-alt"
                ></i>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Payment Complete
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                Max Zanan is one of the leading voices in automotive sales, compliance, and optimization. Max is also the best-selling author of
                Perfect Dealership.
              </Typography>
              <Paper />
            </Grid>
            <Grid data-aos="fade-left" item xs={4} sm={4} md={3}>
              <Paper elevation={0} />
              <Box style={{ fontSize: "100px", textAlign: "center" }}>
                <i
                  style={{ padding: "20px", border: "2px solid #FFDD00", color: "lightgrey", marginBottom: "10px" }}
                  className="fas fa-car-crash"
                ></i>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Enjoy The Car
              </Typography>{" "}
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                Max Zanan is one of the leading voices in automotive sales, compliance, and optimization. Max is also the best-selling author of
                Perfect Dealership.
              </Typography>
              <Paper />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Works;
