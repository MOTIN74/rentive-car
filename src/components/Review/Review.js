import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import "./Review.css";

const Review = () => {
  const history = useHistory();
  const url = "/review";
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    delete data._id;

    axios.post("http://localhost:5000/allReview", data).then((res) => {
      if (res?.data?.insertedId) {
        swal({
          title: "Congratulations!",
          text: "Your review has been successfully..Let's take a look at everyone's reviews",
          icon: "success",
          button: "Done",
        });
        history.push(url);
      }
    });
    reset();
    reset(data);
  };
  return (
    <div className="review" style={{ textAlign: "center" }}>
      <h1>Review Our Products</h1>
      <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
        <input style={{ fontSize: "18px", padding: "10px" }} defaultValue={user?.displayName} type="text" {...register("name")} />
        <input style={{ fontSize: "18px", padding: "10px" }} defaultValue={user?.email} type="email" {...register("email")} />
        <input type="tel" style={{ fontSize: "18px", padding: "10px" }} {...register("rating", { min: 1, max: 5 })} placeholder="Rating out of 5" />
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("profession", { required: true })} placeholder="Your Profession" />
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("img", { required: true })} placeholder="Your photo url" />
        <textarea
          rows="7"
          style={{ fontSize: "18px", padding: "10px", border: "1px solid grey" }}
          {...register("desc", { required: true })}
          placeholder="What's your experience ?"
        />
        <input value="Add Review" style={{ fontSize: "18px", padding: "10px", cursor: "pointer" }} type="submit" />
      </form>
    </div>
  );
};

export default Review;
