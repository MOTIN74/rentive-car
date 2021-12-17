import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import "./OrderPlace.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";

const OrderPlace = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();
  const url = "/dashboard/myOrders";

  const onSubmit = (data) => {
    // console.log(data);
    delete data._id;
    // post order
    axios.post("https://lit-forest-29072.herokuapp.com/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Success! We have successfully inserted order");
        swal({
          title: "Good Job!",
          text: "We have received your order. You can see your order on the dashboard",
          icon: "success",
          button: "Done",
        });
        history.push(url);
      }
    });
    reset();
  };

  useEffect(() => {
    const url = `https://lit-forest-29072.herokuapp.com/carExplore/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [productId, reset]);

  useEffect(() => {
    const url = `https://lit-forest-29072.herokuapp.com/allProducts/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [productId, reset]);
  return (
    <React.Fragment>
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Box>
              <Typography sx={{ fontWeight: "500", textAlign: "left" }} variant="h4">
                HIRE {product?.name?.toUpperCase()} PERFORMANTE SPYDER
              </Typography>

              <CardMedia component="img" width="100%" image={product.img} alt="Paella dish" />
              <hr />
              <Typography variant="h4" sx={{ mb: 3 }}>
                TOP CAR RENTAL OF <b>{product.name}</b>{" "}
              </Typography>
              <Typography sx={{ fontSize: "20px" }} color="text.secondary" variant="body2">
                {product.desc}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={{ background: "#F0F0F0", p: 3 }}>
              <Typography sx={{ fontWeight: "500", mb: 5 }} variant="h4">
                SHIPPING FORM
              </Typography>
              <Box className="orderPlaceForm">
                <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user?.displayName} type="text" {...register("userName", { required: true })} />
                  <input defaultValue={user?.email} type="email" {...register("email")} />
                  <input defaultValue={product.price} type="number" {...register("price")} />
                  <input defaultValue={product.img} {...register("img")} />
                  <input placeholder="Phone Number" type="text" {...register("phone", { required: true })} />{" "}
                  <textarea style={{ width: "99.5%" }} placeholder="Your Address" type="text" {...register("address", { required: true })} />
                  <input className="inputSubmit" style={{ border: "none", background: "#EC5990", color: "white" }} value="Order Now" type="submit" />
                </form>
              </Box>
            </Box>
            <Box sx={{ p: 3, mt: 5, boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.2)", textAlign: "left" }}>
              <Typography sx={{ fontWeight: "500", mb: 2 }} variant="h5">
                SPECIFICATIONS
              </Typography>
              <Box>
                <li style={{ color: "grey" }}>Number of seats : 2</li>
                <li style={{ color: "grey" }}>Luggage space : 2 </li>
                <li style={{ color: "grey" }}>Engine : V10 - 640 hp</li>
                <li style={{ color: "grey" }}>0-100 km/h : 2.9 sec</li>
                <li style={{ color: "grey" }}>Maximum Speed : 325 km/h - 201 mph</li>
                <li style={{ color: "grey" }}>Transmission : Auto </li>
                <li style={{ color: "grey" }}>Fuel : Gasoline</li>
                <li style={{ color: "grey" }}>Options : Full Options</li>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default OrderPlace;
