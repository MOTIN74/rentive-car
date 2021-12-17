import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import UiReview from "../UiReview/UiReview";

const ShowAllReview = () => {
  return (
    <div>
      <Menubar />
      <div style={{ height: "350px" }}></div>
      <UiReview />
    </div>
  );
};

export default ShowAllReview;
