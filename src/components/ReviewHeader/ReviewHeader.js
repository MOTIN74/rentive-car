import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ReviewHeader.css";

const ReviewHeader = () => {
  return (
    <React.Fragment>
      <Box className="reviewHeader">
        <Container sx={{ color: "white" }}>
          <Box sx={{ textAlign: "center" }} style={{ paddingTop: "10%" }}>
            <Typography sx={{ color: "#ffdd00", my: 1 }} variant="body2">
              TESTIMONIAL
            </Typography>{" "}
            <Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h3">
              What Our Clients Say
            </Typography>
            <Typography variant="p">
              If you own a car dealer website then you need to spend zero dollars on blogging. Even if you may not be comfortable with <br /> blogging
              daily, there is always someone in sales or marketing who can spend half an hour daily on it.
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default ReviewHeader;
