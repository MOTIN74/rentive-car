import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://lit-forest-29072.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          swal({
            title: "Congratulations!",
            text: "A new one has been added to our admin panel. Welcome to all of us for that..",
            icon: "success",
            button: "Done",
          });
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "30px" }}>Added New Admin</h2>
      <form onSubmit={handleSubmit} action="#">
        <TextField
          required
          onBlur={handleBlur}
          type="email"
          style={{ width: "400px", marginRight: "10px" }}
          label="New Admin Email"
          variant="outlined"
        />
        <Button type="submit" style={{ background: "#ffdd00" }} sx={{ py: 2, px: 3 }}>
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
