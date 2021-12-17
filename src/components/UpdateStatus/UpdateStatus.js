import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import Menubar from "../../Shared/Menubar/Menubar";
import swal from "sweetalert";

const UpdateStatus = () => {
  const { Id } = useParams();
  const history = useHistory();
  const url = "/dashboard";
  const [status, setStatus] = useState({});
  const { register, handleSubmit, reset } = useForm();
  console.log(status);
  //   update
  const onSubmit = (data) => {
    console.log(data);
    delete data._id;
    // update order
    fetch(`http://localhost:5000/updateStatus/${Id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        alert("Successfully! Updated Status This Order");
        swal({
          title: "Completely Updated!",
          text: " You can see your status updated on the manage all order page",
          icon: "success",
          button: "Done",
        });
        history.push(url);
      }
    });
    reset();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/updateStatus/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        reset(data);
      });
  }, [Id, reset, status.email]);

  return (
    <React.Fragment>
      <Menubar />
      <Container style={{ paddingTop: "50px" }}>
        <Box sx={{ background: "#F0F0F0", px: 3, py: 5, borderRadius: 3 }} className="orderPlaceForm">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Status Update</h2>
          <form style={{ margin: "0 auto", width: "400px" }} onSubmit={handleSubmit(onSubmit)}>
            <input disabled defaultValue={status?.email} type="email" {...register("email", { required: true })} />
            <select style={{ padding: "15px", border: "none", marginBottom: "50px" }} {...register("status")}>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <input className="inputSubmit" style={{ border: "none", background: "#EC5990", color: "white" }} value="Update Status" type="submit" />
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default UpdateStatus;
