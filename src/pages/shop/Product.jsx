import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import "aos/dist/aos.css";




export const Product = (props) => {
  
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);  
    const cartItemAmount = cartItems[id];

     
   
   
  return (
  <div className='product'>
    <div className='container'>
    <img src={productImage} />
    <div className='description'>
    <h4>{productName}</h4>
    <p>#{price}</p>
    </div>
    <button className='addToCartBttn' onClick={() => addToCart(id)}>
      Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
  </div>
  </div>
  );
};
