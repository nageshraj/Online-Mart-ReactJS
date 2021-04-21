import React, { useEffect, useState } from 'react'
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link, useHistory} from "react-router-dom";
import {CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe= useStripe();
    const elements= useElements();

    const [success,setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret]= useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        // refreshes everytime basket changes

        const getClientsecret = async() => {
            const response = await axios({ // used to make get/post requests
             method: 'post',
             //Stripe expects payments in sub units
             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
            }

        getClientsecret();

    },[basket])

    console.log('Secret is ',clientSecret)

    const handleSubmit = async(event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
           //payment intent = payment confirmation 

           setSucceeded(true);
           setError(null)
           setProcessing(false)

           history.replace('/orders')
        })

    }

    const handleChange=event => {
           // Listen for changes
           //display errors of card details 
           setDisabled(event.empty);
           setError(event.error ? event.error.message: "");

    }

    return (
        <div className='Payment'> 
            <div className="Payment__container">

            <h1>
               Checkout( {<Link to='/Checkout'>{basket?.length} items</Link>}  )
            </h1>   

            {/* payment section- delivery address */}
            <div className='Payment__section'> 
                <div className='Payment__title'> 
                    <h3>Delivery address</h3>
                </div>

                <div className='Payment__address'>
                    <p> {user?.email} </p>
                    <p> 70/1 8th cross </p>
                    <p>malleshwaram Bangalore-03</p>
                </div>
            </div>

            {/* payment section- dreview items */}
            <div className='Payment__section'> 
                <div className='Payment__title'> 
                    <h3> Review items & Delivery</h3>
                </div>

                <div className='Payment__items'>
                    {basket.map(item =>(
                        <CheckoutProduct
                            id = {item.id}
                            title= {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item. rating}


                        />
                    ))}
                </div>
            </div>
            

            {/* payment section- Payment method */}
            <div className='Payment__section'> 
                <div className="Payment__title">
                    <h3>Payment method</h3>

                </div>

                <div className="Payment__details">
                    {/* Stripe */}  

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange ={handleChange}/>
                        <div className='Payment__priceContainer'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>

                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                                />
                                <button disabled={processing || disabled || success}>
                                    <span>
                                        {processing ? <p>Processing</p>:"Buy now"} </span>
                                </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>  

                </div>
            </div>

            </div>
        </div>
    )
}

export default Payment
