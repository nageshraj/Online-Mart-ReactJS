const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response, request } = require('express');
const stripe = require('stripe')('sk_test_51I5Cr9CTybATI3LTlI3EbifTkFBKQcvjxbDTwymzzkykC3zevNJzNgHPeqrTbrhUG2ygFFJ0Nhz8YZAG3Giw3Mec00wVvvSQXC')

//API

//-App config
const app = express();

//-Middleware, cors for security
app.use(cors({origin: true}));
app.use(express.json());

//-API routes
app.get('/',(request,response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request, response) => {
    const total =  request.query.total;
    console.log('payment request recieved for ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub units
        currency: 'inr',
    });
    //Respone code 201 - OK,Created
    response.status(201).send({
        clientSecret: paymentIntent.client_Secret,
    })
})

//-Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/online-db913/us-central1/api