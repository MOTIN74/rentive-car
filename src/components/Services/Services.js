import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import useAuth from "../../hooks/useAuth";

const Services = () => {
  const { isLoading, setIsLoading } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="p" sx={{ fontWeight: "bold", mt: 5, color: "orange" }} component="div">
        WHAT WE OFFER
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "500", my: 2 }} color="text.secondary" component="div">
          Our Cars Collection
        </Typography>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <Button sx={{ background: "#FFDD00", color: "black" }}>View All</Button>
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Services;
