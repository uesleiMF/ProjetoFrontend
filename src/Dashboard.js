import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, LinearProgress, DialogTitle, DialogContent, TableBody, Table, TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
import axios from 'axios';

const Dashboard = ({ history }) => {
  const [token, setToken] = useState('');
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openProductEditModal, setOpenProductEditModal] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    } else {
      setToken(token);
      getProduct();
    }
  }, []);

  const getProduct = () => {
    setLoading(true);
    let data = `?page=${page}`;
    if (search) {
      data = `${data}&search=${search}`;
    }
    axios.get(`http://localhost:2000/get-product${data}`, {
      headers: { 'token': token }
    })
      .then(res => {
        setLoading(false);
        setProducts(res.data.products);
        setPages(res.data.pages);
      })
      .catch(err => {
        swal({
          text: err.response?.data?.errorMessage || 'An error occurred',
          icon: "error",
          type: "error"
        });
        setLoading(false);
        setProducts([]);
        setPages(0);
      });
  };

  const deleteProduct = (id) => {
    axios.post('http://localhost:2000/delete-product', { id }, {
      headers: { 'token': token }
    })
      .then(res => {
        swal({
          text: res.data.title,
          icon: "success",
          type: "success"
        });
        setPage(1);
        getProduct();
      })
      .catch(err => {
        swal({
          text: err.response?.data?.errorMessage || 'An error occurred',
          icon: "error",
          type: "error"
        });
      });
  };

  const handleProductOpen = () => {
    setOpenProductModal(true);
    setId('');
    setName('');
    setDesc('');
    setPrice('');
    setDiscount('');
    setFileName('');
  };

  const handleProductClose = () => setOpenProductModal(false);

  const handleProductEditOpen = (data) => {
    setOpenProductEditModal(true);
    setId(data._id);
    setName(data.name);
    setDesc(data.desc);
    setPrice(data.price);
    setDiscount(data.discount);
    setFileName(data.image);
  };

  const handleProductEditClose = () => setOpenProductEditModal(false);

  const addProduct = () => {
    const fileInput = document.querySelector("#fileInput");
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('discount', discount);
    formData.append('price', price);

    axios.post('http://localhost:2000/add-product', formData, {
      headers: { 'content-type': 'multipart/form-data', 'token': token }
    })
      .then(res => {
        swal({ text: res.data.title, icon: "success", type: "success" });
        handleProductClose();
        setName('');
        setDesc('');
        setDiscount('');
        setPrice('');
        setFile(null);
        getProduct();
      })
      .catch(err => {
        swal({
          text: err.response?.data?.errorMessage || 'An error occurred',
          icon: "error",
          type: "error"
        });
        handleProductClose();
      });
  };

  const updateProduct = () => {
    const fileInput = document.querySelector("#fileInput");
    const formData = new FormData();
    formData.append('id', id);
    formData.append('file', fileInput.files[0]);
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('discount', discount);
    formData.append('price', price);

    axios.post('http://localhost:2000/update-product', formData, {
      headers: { 'content-type': 'multipart/form-data', 'token': token }
    })
      .then(res => {
        swal({ text: res.data.title, icon: "success", type: "success" });
        handleProductEditClose();
        setName('');
        setDesc('');
        setDiscount('');
        setPrice('');
        setFile(null);
        getProduct();
      })
      .catch(err => {
        swal({
          text: err.response?.data?.errorMessage || 'An error occurred',
          icon: "error",
          type: "error"
        });
        handleProductEditClose();
      });
  };

  const pageChange = (e, value) => {
    setPage(value);
    getProduct();
  };

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <div>
      {loading && <LinearProgress />}
      <h2>Dashboard</h2>
      <Button variant="contained" color="primary" onClick={handleProductOpen}>Add Product</Button>
      <Button variant="contained" onClick={logOut}>Log Out</Button>
      
      {/* Add Product Modal */}
      <Dialog open={openProductModal} onClose={handleProductClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <TextField label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <TextField label="Discount" type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
          <Button variant="contained" component="label">
            Upload
            <input id="fileInput" type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
          </Button>
          {fileName && <p>{fileName}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProductClose}>Cancel</Button>
          <Button disabled={!name || !desc || !price || !discount || !file} onClick={addProduct}>Add Product</Button>
        </DialogActions>
      </Dialog>
      
      {/* Edit Product Modal */}
      <Dialog open={openProductEditModal} onClose={handleProductEditClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <TextField label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <TextField label="Discount" type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
          <Button variant="contained" component="label">
            Upload
            <input id="fileInput" type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
          </Button>
          {fileName && <p>{fileName}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProductEditClose}>Cancel</Button>
          <Button disabled={!name || !desc || !price || !discount} onClick={updateProduct}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Product Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.desc}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.discount}</TableCell>
                <TableCell>
                  <Button onClick={() => handleProductEditOpen(product)}>Edit</Button>
                  <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pagination count={pages} page={page} onChange={pageChange} />
    </div>
  );
};

export default Dashboard;
