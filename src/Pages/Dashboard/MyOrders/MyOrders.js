import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://secret-brook-42211.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://secret-brook-42211.herokuapp.com/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                alert('SuccessFully Deleted')
              setControl(!control);
            }
          });
    };
    
    return (
        <div>
            <h1>My Orders</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => 
                                    <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="right">{product.date}</TableCell>
                                        <TableCell align="right">{product.price}</TableCell>
                                        <TableCell align="right"><button
                                        onClick={() => handleDelete(product?._id)}
                                        className="btn btn-danger"
                                        >
                                        Cancel
                                        </button></TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;