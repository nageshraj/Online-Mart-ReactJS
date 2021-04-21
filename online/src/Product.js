import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}) {

    const [{basket},dispatch]=useStateValue();

    //console.log('this is the basket...',basket)
    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className='Product'>
           <div className="Product__info">
              <p>{title}</p> 
              <p className='Product__price'>
                  <small>₹</small>
                  <strong>{price}</strong>

              </p>
              <div className="Product__rating">
                {Array(rating).fill().map((_,i) => (<p>⭐</p> ))}  
                
              </div>

              
            </div>

            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product
