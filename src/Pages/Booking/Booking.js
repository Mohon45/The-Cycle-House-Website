import React, {useState, useEffect} from "react";
import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState();

  const {user} = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`https://secret-brook-42211.herokuapp.com/singleProduct/${productId}`)
    .then(res => res.json())
    .then(data  => setProduct(data));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    fetch('https://secret-brook-42211.herokuapp.com/confirmOrder', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result){
        alert('Product Added Succesful')
      }
    });
  };

  return (
    <div>
      <div className="booking-container my-5">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={product?.img} alt="" />
            </div>
            <h2>{product?.name}</h2>
            <p className="text-start">{product?.desc}</p>
            <h1> price: {product?.price} $</h1>
          </div>
          <div className="col-md-6">
            <h1>booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={product?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price", { required: true })}
                defaultValue={product?.price}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={product?.img}
                className="p-2 m-2 w-100"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
