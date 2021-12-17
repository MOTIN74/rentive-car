import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Aos from "aos";
import { Box } from "@mui/system";

Aos.init({ duration: "2000" });

const Product = ({ product }) => {
  const { name, desc, price, img, _id } = product;
  return (
    <React.Fragment>
      <Grid item xs={4} sm={8} md={4}>
        <Card data-aos="fade-up" sx={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", p: 1, height: "100%" }}>
          <CardActionArea>
            <Box sx={{ overflow: "hidden" }}>
              <CardMedia className="imgNews" component="img" sx={{ width: 1, height: "293px" }} image={img} alt="green iguana" />
            </Box>
            <CardContent data-aos="fade-zoom-in">
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {desc.slice(0, 149)}...
              </Typography>
              <Typography variant="h6">Price: ${price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions data-aos="flip-left">
            <Link style={{ width: "100%", textDecoration: "none" }} to={`/orderPlace/${_id}`}>
              <Button sx={{ width: 1, display: "block", color: "white" }} className="btn-custom">
                Buy Now
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default Product;
