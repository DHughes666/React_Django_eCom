import React from 'react'
import ImageHelper from './helper/ImageHelper';
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';

    //TODO 
    const isAuthenticated = true;

 const Card = ({
    product,
    addToCarty = true,
    removeFromCart = true,
 }) => {

    const cartTitle = product ? product.name : 'Dev Title';
    const cartDescription = product ? product.description : 'Dev Description';
    const cartPrice = product ? product.price : 'Dev Price';
    // const cartCategory = product ? product.category : 'Dev Category';

    const addToCart = () => {
        if (isAuthenticated) {
            addItemToCart(product, ()=>{});
            console.log("Added to cart");
        } else {
            console.log("Please Login");
        }
    };

    const getRedirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />
        }
    }

    const showAddToCart = (addToCarty) => {
        return (
            addToCarty && (
                <button 
                        onClick={addToCart}
                        className="btn btn-block btn-outline-success mt-2 mb-2"
                    >Add to Cart</button>
            )
        )
    };

    const showRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id);
                        console.log('Product removed successfully');
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >Remove from cart</button>
            )
        )
    }

  return (
    <div className="card text-white bg-dark border border-info">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
            <ImageHelper 
                product={product}
            />
            <p className="lead bg-success font-weight-normal text-wrap">
                {cartDescription}
            </p>
            
            <p className="btn btn-success rounded btn-sm px-4">$ {cartPrice}</p>
            <div className="row">
                <div className="col-12">
                    {showAddToCart(addToCart)}
                </div>
                <div className="col-12">
                    {showRemoveFromCart(removeFromCart)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card