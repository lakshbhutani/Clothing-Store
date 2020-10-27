import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HgyTGFHOhfi9riXz6xM27T999S4cD3XLMgBCPvY2vImJ3D6kLDNejsS1gVomep2IVUDvjpmblGaXMxIJcDIgNwM006CSiCNK0'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return(
        <StripeCheckout 
            amount={priceForStripe} 
            label='Pay Now'
            name='Crown clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton