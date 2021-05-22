import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,product)=> total + product.likes , 0)

  let shipping = 0;
    if (totalPrice > 35) {
         shipping = 0;
    }
    else if (totalPrice >  15) {
         shipping = 4.99;
    }
    else if (totalPrice > 0) {
         shipping= 12.90
    }
    const tax =(totalPrice / 10).toFixed(2);
    return (
        <div>
             <h3 className="text-center text-success"><b>Order Summary</b></h3>
             <h5 className="text-center">Items Ordered : {cart.length}</h5>  
             <h6 className="mt-3">Product Price : <strong className="price">{totalPrice}</strong></h6>
             <h6 className="mt-3">Shipping Cost : <strong className="price">{shipping}</strong></h6>
             <h6 className="mt-3">Tax + Vat : <strong className="price">{tax}</strong></h6>
             <h4 className="mt-3 text-success bg-warning p-2">Total Price  <strong className="price">= {(totalPrice + shipping + Number(tax)).toFixed(2)}</strong></h4><br />
        </div>
    );
};

export default Cart;