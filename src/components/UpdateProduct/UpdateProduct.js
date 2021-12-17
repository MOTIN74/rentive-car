import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import Menubar from "../../Shared/Menubar/Menubar";
import swal from "sweetalert";

const UpdateProduct = () => {
  const history = useHistory();
  const url = "/dashboard/ManageProducts";
  const [product, setProduct] = useState({});
  const { Id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    delete data._id;
    // update order
    fetch(`http://localhost:5000/updateProduct/${Id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        alert("Successfully! Updated your product");
        swal({
          title: "Completely Updated!",
          text: " You can see your product on the explore page",
          icon: "success",
          button: "Done",
        });
        history.push(url);
      }
    });
    reset();
  };

  useEffect(() => {
    const url = `http://localhost:5000/carExplore/${Id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [Id, reset]);

  return (
    <React.Fragment>
      <Menubar />
      <Container sx={{ pt: 5 }}>
        <Box sx={{ background: "#F0F0F0", px: 3, py: 5, borderRadius: 3 }} className="orderPlaceForm">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Update This Product</h2>
          <form style={{ margin: "0 auto", width: "400px" }} onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={product.key} type="text" {...register("key", { required: true })} />
            <input defaultValue={product.name} type="text" {...register("name")} />
            <input defaultValue={product.price} type="number" {...register("price")} />
            <input defaultValue={product.img} {...register("img")} />
            <textarea rows="7" defaultValue={product.desc} style={{ width: "99.5%" }} type="text" {...register("desc", { required: true })} />
            <input className="inputSubmit" style={{ border: "none", background: "#EC5990", color: "white" }} value="Update Product" type="submit" />
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UpdateProduct;
