import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Menubar from "../Menubar/Menubar";

const Register = () => {
  const { registerUser, isLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, history, data.name);
    reset();
  };

  return (
    <>
      <Menubar />
      <div className="login" style={{ textAlign: "center", paddingTop: "8%", color: "white" }}>
        {isLoading && (
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        )}
        <div
          style={{
            margin: "50px 0  auto",
            display: "inline-block",
            boxShadow: "inset 1px 1px 10px rgb(255,255,255,0.2)",
            padding: "50px 20px",
          }}
        >
          <img style={{ width: "150px" }} src="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" alt="" />
          <h2 className="mb-5">Register New Account</h2>
          {!isLoading && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Name" style={{ fontSize: "18px", padding: "10px" }} {...register("name")} type="text" />
              <input placeholder="Email" style={{ fontSize: "18px", padding: "10px" }} {...register("email")} type="email" />
              <input placeholder="Password" style={{ fontSize: "18px", padding: "10px" }} {...register("password")} type="password" />
              <input
                style={{ fontSize: "18px", padding: "10px", background: "#EC5990", border: "none", color: "white", cursor: "pointer" }}
                value="CONTINUE"
                type="submit"
              />
            </form>
          )}

          <div>
            <p>
              Already have an account?
              <NavLink style={{ color: "#EC5990", textDecoration: "none" }} to="/login">
                {" "}
                Please Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
