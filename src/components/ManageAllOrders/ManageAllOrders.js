import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://lit-forest-29072.herokuapp.com/allOrdersManage")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
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
              const remaining = allOrders.filter((order) => order._id !== id);
              setAllOrders(remaining);
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        }
      });
  };

  return (
    <div className="text-center">
      <h2>All Orders Found: {allOrders.length} </h2>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Car</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Manage Order</th>
          </tr>
        </thead>
        {allOrders.map((order, index) => (
          <tbody key={order._id} className="text-center">
            <tr>
              <th style={{ width: "25px", borderRight: "1px solid grey" }} scope="row">
                {index + 1}
              </th>
              <td style={{ width: "200px", margin: "0 0 0 5px" }}>
                <img style={{ width: "100%" }} src={order.img} alt="" />
              </td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>${order.price}</td>
              <td>
                {order.status ? order.status : "Pending..."}
                <Link style={{ textDecoration: "none" }} to={`/updateStatus/${order._id}`}>
                  <Button className="btn-custom" sx={{ px: 2, py: 1, m: 1, color: "white" }} type="submit">
                    Update
                  </Button>
                </Link>
              </td>
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

export default ManageAllOrders;
