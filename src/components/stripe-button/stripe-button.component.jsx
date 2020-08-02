import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HBkjNB59xf2gm6rOIUqMto0UyNcs5XIH4j7gN4LifTy0drty0I2AnetZDJDTgw38wIx2i8bGz3yaszoG7SDQGAJ006bZEjpVd'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='FitStore'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;