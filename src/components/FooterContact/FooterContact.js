import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FooterContact = () => {
  return (
    <React.Fragment>
      <Container className="parent" sx={{ background: "#1A1A1A", color: "white" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={3} sx={{ p: 3, borderRight: "1px solid #333" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {" "}
                <i style={{ color: "#ffdd00", marginRight: "15px", fontSize: "30px" }} className="fas fa-phone-alt"></i>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  Call Us
                </Typography>
                <Typography variant="p">+880 123456789</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={3} sx={{ p: 3, borderRight: "1px solid #333" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {" "}
                <i style={{ color: "#ffdd00", marginRight: "15px", fontSize: "30px" }} className="far fa-envelope"></i>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  Email Us
                </Typography>
                <Typography variant="p">amotin68@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={3} sx={{ p: 3, borderRight: "1px solid #333" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {" "}
                <i style={{ color: "#ffdd00", marginRight: "15px", fontSize: "30px" }} className="fas fa-map-marker-alt"></i>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  Our Location
                </Typography>
                <Typography variant="p">Sesetan East ST.1919, Khulna</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={3} sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {" "}
                <i style={{ color: "#ffdd00", marginRight: "15px", fontSize: "30px" }} className="far fa-clock"></i>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  Work Hours
                </Typography>
                <Typography variant="p">10:00 AM -- 06:00 PM</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default FooterContact;
