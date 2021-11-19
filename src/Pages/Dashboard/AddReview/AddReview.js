import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://secret-brook-42211.herokuapp.com/reviews', {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          alert('Review Added!');
        });
  };
  return (
    <div>
        <div>
            <h1 className="mt-5 text-center text-info">Please give the Reveiw</h1>
            <div className="login-box w-25 m-auto mt-5 mb-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                        {...register("name")}
                        placeholder="Name"
                        className="p-2 m-2 w-100"
                        />
                        <br />
                        <TextField
                        {...register("description")}
                        placeholder="Description"
                        className="p-2 m-2 w-100"
                        />
                        <br />

                        <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                        {...register("rating", { required: true })}
                        placeholder="Rating(out of 5)"
                        type="number"
                        className="p-2 m-2 w-100"
                        />
                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                        type="submit"
                        value="Add"
                        className="btn btn-info w-50"
                        />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddReview;
