import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { Button, CardMedia } from "@mui/material";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Payment from "../Payment/Payment";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import useAuth from "../../hooks/useAuth";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRoute from "../../Shared/AdminRoute/AdminRoute";

const drawerWidth = 240;
const Dashboard = (props) => {
  const { logOut, admin, user } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ textAlign: "center" }}>
      <Toolbar />
      <Divider />
      <NavLink
        to="/home"
        style={{
          textDecoration: "none",
          background: "#111",
          padding: "10px 0",
          display: "block",
          fontSize: "18px",
          color: "white",
          margin: "5px 0",
        }}
      >
        {user.displayName}
      </NavLink>{" "}
      {/* users */}
      {!admin && (
        <>
          <NavLink
            to={`${url}/payment`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Pay
          </NavLink>{" "}
          <NavLink
            to={`${url}/myOrders`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            My Orders
          </NavLink>{" "}
          <NavLink
            to={`${url}/review`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Review
          </NavLink>
        </>
      )}
      {/* admin */}
      {admin && (
        <>
          <NavLink
            to={`${url}/manageAllOrders`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Manage All Orders
          </NavLink>
          <NavLink
            to={`${url}/addProduct`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Add Product
          </NavLink>
          <NavLink
            to={`${url}/makeAdmin`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Make Admin
          </NavLink>
          <NavLink
            to={`${url}/ManageProducts`}
            activeStyle={{
              color: "red",
            }}
            style={{
              textDecoration: "none",
              background: "#ffdd00",
              padding: "10px 0",
              display: "block",
              fontSize: "18px",
              color: "black",
              margin: "5px 0",
            }}
          >
            Manage Products
          </NavLink>
        </>
      )}
      <NavLink style={{ textDecoration: "none" }} to="/login">
        <Button
          onClick={logOut}
          style={{
            background: "#0cebeb",
            padding: "10px 0",
            width: "100%",
            fontSize: "18px",
            color: "white",
            margin: "5px 0",
          }}
          variant="inherit"
        >
          logOut
        </Button>
      </NavLink>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "#1A1A1A",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <CardMedia component="img" style={{ width: "150px" }} image="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" alt="Paella dish" />
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {!admin && (
          <>
            <Switch>
              <Route exact path={path}>
                <MyOrders />
              </Route>
              <Route path={`${path}/payment`} component={Payment} />
              <Route path={`${path}/myOrders`} component={MyOrders} />
              <Route path={`${path}/review`} component={Review} />
            </Switch>
          </>
        )}
        {/*  */}

        {admin && (
          <>
            <Switch>
              <Route exact path={path}>
                <ManageAllOrders />
              </Route>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/ManageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </>
        )}
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
