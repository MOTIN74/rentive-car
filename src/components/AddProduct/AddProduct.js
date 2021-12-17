import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";

const AddProduct = () => {
  const history = useHistory();
  const url = "/explore";
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://lit-forest-29072.herokuapp.com/addProduct", data).then((res) => {
      if (res?.data?.insertedId) {
        swal({
          title: "Wow!",
          text: "Your product has been successfully added...We have added your product wherever you have all the products.",
          icon: "success",
          button: "Done",
        });
        history.push(url);
      }
    });
    reset();
  };
  return (
    <div className="review" style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Add New Collection</h1>
      <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Product Code" style={{ fontSize: "18px", padding: "10px" }} type="text" {...register("key")} />

        <input placeholder="Product Name" style={{ fontSize: "18px", padding: "10px" }} type="text" {...register("name")} />

        <input type="text" style={{ fontSize: "18px", padding: "10px" }} {...register("img")} placeholder="Photo URL" />

        <input type="number" style={{ fontSize: "18px", padding: "10px" }} {...register("price", { required: true })} placeholder="Price" />

        <textarea
          rows="6"
          style={{ fontSize: "18px", padding: "10px", border: "1px solid grey" }}
          {...register("desc", { required: true })}
          placeholder="Description"
        />
        <input
          style={{ fontSize: "18px", padding: "10px", cursor: "pointer", background: "#EC5990", border: "1px solid grey", color: "white" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
