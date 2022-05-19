import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 " key = {cartItem.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width ="180px"/>
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
const emptyCart = () => {
  return(
    <div className="px-4 my-5 bg-light rounded-3 py-4">
        <div className="container py-4">
          <div className="row">
            <h3>Your cart is empty</h3>
          </div>
          </div>
          </div>

  );
}
const button = () => {
  return(
    <div className="container">
      <div className="row">
        <NavLink to="/CartBuy" className="btn btn-outlined-dark w-25">Go to checkout</NavLink>
      </div>
    </div>
  );
}

  return (
    <div className="page-container">
      <Navbar/>
    {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
      <Footer />
    </div>

  );
}

export default Cart