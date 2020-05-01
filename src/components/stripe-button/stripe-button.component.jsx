import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_OzCsP8oOrSbtEmg087PalBCT00nT7i05XH';

    const onToken = token => {
        alert('Payment Successfull');
    }
     return(
        <StripeCheckout
        label='Pay Now'
        name= 'Mates Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total price is $${price}`}
        amount = {priceForStripe}
        panelLabel= 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;