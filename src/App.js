import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Shared/Login/Login";
import Register from "./Shared/Register/Register";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";
import ShowAllReview from "./components/ShowAllReview/ShowAllReview";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import UpdateStatus from "./components/UpdateStatus/UpdateStatus";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/explore" component={Explore} />
            <PrivateRoute path="/orderPlace/:productId">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route path="/updateProduct/:Id">
              <UpdateProduct />
            </Route>{" "}
            <Route path="/updateStatus/:Id">
              <UpdateStatus />
            </Route>
            <Route exact path="/review" component={ShowAllReview} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
