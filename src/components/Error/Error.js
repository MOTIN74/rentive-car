import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div style={{ margin: "10% " }}>
        <img style={{ marginBottom: "50px" }} src="https://iconape.com/wp-content/themes/svvvg/assets/img/cryface.svg" alt="" />
        <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />

        <h5>Oops! We couldn’t find results for your search</h5>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/home">Back to Home</Link>
        </div>
      </div>
      <div style={{ margin: "10% auto" }}>
        <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/home">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
