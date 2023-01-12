import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import { CartItem } from './CartItem';
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
      <div className='checkout'>
        <p><b>Total: #{ totalAmount }</b></p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout</button>
      </div>
      ) : (
        <p>Your Cart Is Empty</p>
      )}

    </div>
  )
}
