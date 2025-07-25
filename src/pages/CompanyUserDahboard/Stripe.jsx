// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    // 1. Get client secret from your backend
    const res = await fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }), // $10
    });

    const { clientSecret } = await res.json();

    // 2. Confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      setMessage('Payment Successful!');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3>Stripe Payment</h3>
      <CardElement />
      <button type="submit" disabled={!stripe || loading} style={{ marginTop: '20px' }}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default StripeCheckoutForm;
