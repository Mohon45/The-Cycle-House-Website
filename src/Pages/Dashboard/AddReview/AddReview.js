import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./AddReview.css";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();

    axios
      .post("https://secret-brook-42211.herokuapp.com/reviews", data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          event.target.reset();
          toast.success("Review Successfully Submit!");
        }
      })
      .catch((error) => {
        toast.error(error.response);
      });
  };

  let content;
  content = (
    <div
      className="card mt-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <div className="card-body">
        <h1>Please give the Reveiw in Cycle House</h1>

        <div className="review-from">
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                {...register("name")}
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Your Name"
                required
              />
              <label htmlFor="floatingName">Your Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                {...register("image")}
                type="text"
                className="form-control"
                id="floatingImage"
                placeholder="Image Link"
                required
              />
              <label htmlFor="floatingImage">Image Link</label>
            </div>
            <div className="form-floating mb-3">
              <input
                {...register("rating")}
                type="text"
                className="form-control"
                id="floatingRating"
                placeholder="Rating(out of 5)"
                required
              />
              <label htmlFor="floatingRating">Rating(out of 5)</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                {...register("description")}
                className="form-control"
                id="floatingPrice"
                required
                rows="3"
                placeholder="Your Description"
              ></textarea>
              <label htmlFor="floatingPrice">Your Description</label>
            </div>

            <div className="form-floating mb-3">
              <input type="submit" className="form-control" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
};

export default AddReview;
