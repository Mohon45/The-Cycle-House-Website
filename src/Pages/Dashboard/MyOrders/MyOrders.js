import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ConfirmationAlert from "../../Const/ConfirmationAlert/ConfirmationAlert";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [products, setProducts] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useAuth();
  const userEmail = user.email;
  console.log(products);

  useEffect(() => {
    axios
      .get("https://secret-brook-42211.herokuapp.com/bookings")
      .then((res) => {
        if (res.status === 200) {
          const result = res.data.filter((item) => item.email === userEmail);
          setProducts(result);
        }
      })
      .catch((error) => {
        toast.error(error.response);
      });
  }, [control]);

  const onDeleteHandler = (id) => {
    ConfirmationAlert(() => handleDelete(id));
  };

  const handleDelete = (id) => {
    fetch(`https://secret-brook-42211.herokuapp.com/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Order Cancel Successfull!");
          setControl(!control);
        }
      });
  };

  return (
    <div>
      <h1>My Orders</h1>

      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center">Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">Price</th>
                <th className="text-center">Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider cus-desg">
              {products.map((product, index) => (
                <tr>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{product.name}</td>
                  <td className="text-center">{product.address}</td>
                  <td className="text-center">{product.price}</td>
                  <td className="text-center">{product.date}</td>
                  <td className="text-center">
                    <button
                      onClick={() => onDeleteHandler(product?._id)}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
