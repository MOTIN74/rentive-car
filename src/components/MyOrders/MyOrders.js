import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import swal from "sweetalert";

const MyOrders = () => {
  const { user, isLoading, setIsLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const url = `https://lit-forest-29072.herokuapp.com/allOrders/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, user?.email]);

  if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    );
  }

  //
  const handleDelete = (id) => {
    fetch(`https://lit-forest-29072.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal(
                "Poof! Your imaginary file has been deleted!. Successfully delete Your Order. We are obliged to delete the order at your request. Thanks again",
                {
                  icon: "success",
                }
              );
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        }
      });
  };
  return (
    <div className="text-center">
      <h2>Order Found: {orders.length} </h2>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Car</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Manage Order</th>
          </tr>
        </thead>
        {orders.map((order, index) => (
          <tbody key={order._id} className="text-center">
            <tr>
              <th style={{ width: "25px", borderRight: "1px solid grey" }} scope="row">
                {index + 1}
              </th>
              <td style={{ width: "200px", margin: "0 0 0 5px" }}>
                <img style={{ width: "100%" }} src={order.img} alt="" />
              </td>
              <td>{order.name}</td>
              <td>${order.price}</td>
              <td>{order.status ? order.status : "pending..."}</td>
              <td style={{ width: "100px" }}>
                <Button color="success" onClick={() => handleDelete(order._id)} variant="contained">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyOrders;
