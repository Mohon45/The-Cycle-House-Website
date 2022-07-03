import React, { useState, useEffect } from "react";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { DynamicStar } from "react-dynamic-star";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import CompleteSymbol from "../Shared/Loading/CompleteSymbol";
import Spinner from "../Shared/Loading/Spinner";

const Booking = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    axios
      .get(
        `https://arcane-atoll-77815.herokuapp.com/singleProduct/${productId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    setLoading(false);
    setCompleted(false);
    data.email = email;
    axios
      .post("https://arcane-atoll-77815.herokuapp.com/confirmOrder", data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Order Successfully Plase!");
          setLoading(true);
          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const { img, desc, price, name, rating } = product;

  let content;
  content = (
    <div className="row my-5">
      <div className="col-md-6 left-side">
        <div className="product-top">
          <img src={img} alt="" />
          <div className="product-description">
            <h4>{name}</h4>
            <p>{desc}</p>
            <div className="d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center">
                <p className="me-2 pt-2">Rating</p>
                <DynamicStar
                  rating={rating}
                  width={30}
                  height={30}
                  outlined={"" ? "" : true}
                  totalStars={5}
                  sharpnessStar={2}
                  fullStarColor={"#FFBC00"}
                  emptyStarColor={"transparent"}
                />
              </div>
              <div>
                <h5>Price: $ {price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h1>booking Form</h1>
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
              {...register("price")}
              type="text"
              className="form-control"
              id="floatingPrice"
              placeholder="Price"
              required
            />
            <label htmlFor="floatingPrice">Price</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("address")}
              type="text"
              className="form-control"
              id="floatingAddress"
              placeholder="Address"
              required
            />
            <label htmlFor="floatingAddress">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...register("date")}
              type="date"
              className="form-control"
              id="floatingDate"
              placeholder="Date"
              required
            />
            <label htmlFor="floatingDate">Date</label>
          </div>
          <div className="form-floating mb-3">
            <input type="submit" className="form-control" value="Order Now" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="container">
      {!completed ? (
        <>{!loading ? <Spinner /> : <CompleteSymbol />}</>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default Booking;
