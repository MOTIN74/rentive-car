import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import { AppBar, Button, CardMedia } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";

const Menubar = () => {
  const { user, logOut } = useAuth();
  return (
    <AppBar fixed={true.toString()}>
      <MuiNavbar logo="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" background="#111" navItemPosition="right">
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/explore">Explore</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>

        {user?.email ? (
          <>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <Box sx={{ display: "inline", background: "rgba(255,255,255,0.1)", pt: 5, pb: 2, borderRadius: "5px", px: 1, color: "white" }}>
              {" "}
              <CardMedia
                component="img"
                sx={{ width: "auto", display: "inline", me: 1 }}
                image="https://i.ibb.co/fq4WsRF/user-icon.png"
                alt="Paella dish"
              />{" "}
              {user.displayName}{" "}
            </Box>
            <NavItem to="/login">
              <Button sx={{ py: 1, px: 3 }} onClick={logOut} variant="contained">
                Logout
              </Button>
            </NavItem>
          </>
        ) : (
          <NavItem to="/login">
            <Button variant="contained">Login</Button>
          </NavItem>
        )}
      </MuiNavbar>
    </AppBar>
  );
};

export default Menubar;
