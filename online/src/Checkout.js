import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const[{basket, user},dispatch]= useStateValue();

    return (
        <div className='Checkout'>
            <div className="Checkout__left">
                <img className="Checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

                <div>
                    <h3>{user?.email}</h3> 
                    <h2 className="Checkout__title">Your Cart </h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ) )}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    

                    
                </div>
            </div>

            <div className="Checkout__right">
                <Subtotal />
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
